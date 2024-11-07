import React, { useEffect, useState, useMemo } from 'react';
import { Cards } from './card';
import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Feed = () => {
  const [images, setImages] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);
  const totalImagesNeeded = 10;
  const navigate = useNavigate();
  const location = useLocation();

  // Función para obtener imágenes
  async function fetchImages(query = "") {
    try {
      const url = query
        ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
        : `https://api.thedogapi.com/v1/images/search?limit=100&has_breeds=1`;
  
      const response = await fetch(url, {
        headers: {
          "content-type": "application/json",
          'x-api-key': import.meta.env.VITE_CAT_API_KEY
        }
      });
      const jsonImages = await response.json();
  
      if (query) {
        // Cuando hay un query, la respuesta no siempre tiene la estructura de 'breeds'
        const searchResults = jsonImages
          .filter(breed => breed.reference_image_id)
          .map(breed => ({
            breeds: [{
              name: breed.name || "Breed Name",
              temperament: breed.temperament || "Sin temperamento.",
              breed_group: breed.breed_group || "Sin grupo de raza.",
              life_span: breed.life_span || "Sin tiempo de vida.",
              weight: breed.weight?.imperial || "Sin dato",
              height: breed.height?.imperial || "Sin dato"
            }],
            url: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`,
            id: breed.id || breed.reference_image_id
          }));
        return searchResults;
      } else {
        // En el caso de no tener un query, limpiamos la respuesta para asegurar que siempre venga la estructura correcta
        return jsonImages.map(image => ({
          breeds: image.breeds.length > 0 ? image.breeds : [{
            name: image.breeds[0]?.name || "Breed Name",
            temperament: image.breeds[0]?.temperament || "Sin temperamento.",
            breed_group: image.breeds[0]?.breed_group || "Sin grupo de raza.",
            life_span: image.breeds[0]?.life_span || "Sin tiempo de vida.",
            weight: image.breeds[0]?.weight?.metric || "Sin dato",
            height: image.breeds[0]?.height?.metric|| "Sin dato"
          }],
          url: image.url,
          id: image.id || image.reference_image_id
        }));
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  }  

  useEffect(() => {
    const getUniqueImages = async () => {
      setLoading(true);
      const uniqueImages = await fetchImages(text);
      
      setAllImages(uniqueImages);
      setImages(uniqueImages);
      setLoading(false);
    };

    if (searched || text === "") {
      getUniqueImages();
      setSearched(false);
    }
  }, [searched, text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  const currentPageImages = useMemo(() => {
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const startIndex = (page - 1) * totalImagesNeeded;
    return allImages.slice(startIndex, startIndex + totalImagesNeeded);
  }, [allImages, location.search]);

  useEffect(() => {
    setImages(currentPageImages);
  }, [currentPageImages]);

  const totalPages = Math.ceil(allImages.length / totalImagesNeeded);

  const handlePageChange = (event, page) => {
    navigate(`?page=${page}`);
  };

  return (
    <>
      <SearchBar text={text} setText={setText} handleSubmit={handleSubmit} />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 md:grid-cols-12 mt-20">
        {loading ? (
          <div className="flex justify-center mt-4 col-span-full">
            <div className="loader border-t-transparent border-blue-500 border-4 rounded-full w-8 h-8 animate-spin"></div>
          </div>
        ) : images.length > 0 ? (
          images.map(image => (
            <div key={image.id || image.reference_image_id} className="col-span-2 sm:col-span-2 md:col-span-4 gap-y-3 flex justify-center">
              <Cards data={image} />
            </div>
          ))
        ) : (
          <div className="flex justify-center mt-4 col-span-full">
            <p>No hay imágenes disponibles.</p>
          </div>
        )}
      </div>

      {!loading && (
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
