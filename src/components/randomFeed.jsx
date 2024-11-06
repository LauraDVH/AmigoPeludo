import React, { useEffect, useState, useMemo } from 'react';
import { Cards } from './card';
import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Feed = () => {
    const [images, setImages] = useState([]); // Almacena imágenes para la página actual
    const [allImages, setAllImages] = useState([]); // Almacena todas las imágenes
    const [loading, setLoading] = useState(true); // Estado de carga
    const totalImagesNeeded = 10; // Número total de imágenes por página
    const totalImagesRequested = 100; // Límite de imágenes por solicitud
    const navigate = useNavigate();
    const location = useLocation();

    // Función para obtener las imágenes
    async function fetchImages() {
        try {
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${totalImagesRequested}&has_breeds=1`, {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': import.meta.env.VITE_CAT_API_KEY
                }
            });
            const jsonImages = await response.json();

            // Filtrar imágenes únicas
            const uniqueImages = jsonImages.filter((image, index, self) =>
                image.breeds.length > 0 && 
                index === self.findIndex((img) => img.breeds[0]?.id === image.breeds[0]?.id)
            );

            return uniqueImages; // Retorna las imágenes únicas
        } catch (e) {
            console.log(e);
            return []; // Retornar un arreglo vacío en caso de error
        }
    }

    useEffect(() => {
        const getUniqueImages = async () => {
            const storedImages = localStorage.getItem('allImages');
            
            if (storedImages) {
                try {
                    const parsedImages = JSON.parse(storedImages);
                    if (Array.isArray(parsedImages) && parsedImages.length > 0) {
                        setAllImages(parsedImages);
                        setLoading(false);
                        return;
                    }
                } catch (error) {
                    console.error("Error parsing JSON from Local Storage:", error);
                }
            }

            // Si no hay imágenes en Local Storage o la conversión falló, realiza una solicitud a la API
            const uniqueImages = await fetchImages();
            setAllImages(uniqueImages);
            localStorage.setItem('allImages', JSON.stringify(uniqueImages));
            setLoading(false);
        };
        
        getUniqueImages();
    }, []);

    // Memoiza las imágenes actuales para evitar recalcular si `allImages` y `location.search` no cambian
    const currentPageImages = useMemo(() => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page') || '1', 10);
        const startIndex = (page - 1) * totalImagesNeeded;
        return allImages.slice(startIndex, startIndex + totalImagesNeeded);
    }, [allImages, location.search]);

    useEffect(() => {
        setImages(currentPageImages);
    }, [currentPageImages]);

    const totalPages = Math.ceil(allImages.length / totalImagesNeeded); // Total de páginas

    // Cambia la página
    const handlePageChange = (event, page) => {
        navigate(`?page=${page}`); // Cambia la URL al cambiar la página
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 md:grid-cols-12">
                {loading ? ( // Muestra el círculo de carga si está cargando
                    <div className="flex justify-center mt-4 col-span-full">
                        <div className="loader border-t-transparent border-blue-500 border-4 rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                ) : images.length > 0 ? (
                    images.map(image => (
                        <div key={image.id} className="col-span-2 sm:col-span-2 md:col-span-4 gap-y-3 flex justify-center">
                            <Cards data={image} />
                        </div>
                    ))
                ) : (
                    <div className="flex justify-center mt-4 col-span-full">
                        <p>No hay imágenes disponibles.</p>
                    </div>
                )}
            </div>
            {!loading && ( // Muestra la paginación solo si no está cargando
                <div className="flex justify-center mt-4">
                    <Pagination
                        count={totalPages}
                        page={parseInt(new URLSearchParams(location.search).get('page') || '1', 10)}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </div>
            )}
        </>
    );
};

export default Feed;
