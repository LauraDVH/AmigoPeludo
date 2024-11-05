import React, { useEffect, useState } from 'react';
import { Cards } from './card';

const Feed = () => {
    const [images, setImages] = useState([]); // Almacena imágenes para la página actual
    const [allImages, setAllImages] = useState([]); // Almacena todas las imágenes
    const [currentPage, setCurrentPage] = useState(0); // Página actual
    const totalImagesNeeded = 10; // Número total de imágenes por página
    const totalImagesRequested = 100; // Límite de imágenes por solicitud

    async function fetchImages() {
        try {
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${totalImagesRequested}&has_breeds=1`, {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': import.meta.env.VITE_CAT_API_KEY
                }
            });
            const jsonImages = await response.json();

            console.log('Imágenes recibidas:', jsonImages.length); // Ver cuántas imágenes se recibieron

            // Filtrar imágenes únicas
            const uniqueImages = jsonImages.filter((image, index, self) =>
                image.breeds.length > 0 && 
                index === self.findIndex((img) => img.breeds[0]?.id === image.breeds[0]?.id)
            );

            console.log('Imágenes únicas:', uniqueImages.length); // Ver cuántas imágenes únicas quedan después del filtro

            return uniqueImages; // Retorna las imágenes únicas
        } catch (e) {
            console.log(e);
            return []; // Retornar un arreglo vacío en caso de error
        }
    }

    useEffect(() => {
        const getUniqueImages = async () => {
            const uniqueImages = await fetchImages();
            setAllImages(uniqueImages);
        };
        getUniqueImages();
    }, []);

    useEffect(() => {
        // Actualizamos las imágenes para la página actual
        const startIndex = currentPage * totalImagesNeeded;
        const currentImages = allImages.slice(startIndex, startIndex + totalImagesNeeded);
        setImages(currentImages);
    }, [currentPage, allImages]);

    const totalPages = Math.ceil(allImages.length / totalImagesNeeded); // Total de páginas

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 md:grid-cols-12">
                {images && images.map(image => (
                    <div key={image.id} className="col-span-2 sm:col-span-2 md:col-span-4 gap-y-4 flex justify-center">
                        <Cards data={image} />
                    </div>
                ))}
            </div>
            {images.length === 0 && (
                <div className="flex justify-center mt-4">
                    <div className="loader border-t-transparent border-blue-500 border-4 rounded-full w-8 h-8 animate-spin"></div>
                </div>
            )}
            <div className="flex justify-between mt-4">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 0} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Anterior
                </button>
                <span>{`Página ${currentPage + 1} de ${totalPages}`}</span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage >= totalPages - 1} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Siguiente
                </button>
            </div>
        </>
    );
};

export default Feed;