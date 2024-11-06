import React, { useEffect, useState } from "react";
import { Cards } from "../components/tarjetasimg";
import huellas from "../assets/image/huellas.png";

const Feed = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState(12); // Imágenes visibles por página
  const totalImagesRequested = 100;

  // Función para obtener las imágenes
  async function fetchImages() {
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?limit=${totalImagesRequested}&has_breeds=1`,
        {
          headers: {
            "content-type": "application/json",
            "x-api-key": import.meta.env.VITE_CAT_API_KEY,
          },
        }
      );
      const jsonImages = await response.json();

      // Filtrar imágenes únicas
      const uniqueImages = jsonImages.filter(
        (image, index, self) =>
          image.breeds.length > 0 &&
          index ===
            self.findIndex((img) => img.breeds[0]?.id === image.breeds[0]?.id)
      );

      setImages(uniqueImages); // Actualiza el estado con imágenes únicas
      setLoading(false);
    } catch (e) {
      console.log(e);
      setImages([]); // Maneja error
      setLoading(false);
    }
  }

  // Función para mostrar más imágenes
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 8); // Incrementa el número de imágenes visibles
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-2 gap-x-0 sm:grid-cols-3 md:grid-cols-4">
    
      {loading ? (
        <div className="flex justify-center mt-4 col-span-full">
          <div className="w-8 h-8 border-4 border-blue-500 rounded-full loader border-t-transparent animate-spin"></div>
        </div>
      ) : images.length > 0 ? (
        images.slice(0, visibleImages).map((image) => (
          <div
            key={image.id}
            className="flex justify-center overflow-hidden rounded-full"
          >
            <Cards data={image} />
          </div>
        ))
      ) : (
        <div className="flex justify-center mt-4 col-span-full">
          <p>No hay imágenes disponibles.</p>
        </div>
      )}

      {visibleImages < images.length && (
        <div className="flex justify-center mt-2  ">
          <button
            onClick={loadMoreImages}
            className="px-4 py-2 text-white bg-purple-700 rounded-full hover:bg-purple-800 ml-[75vw] mb-3 border-none md:px-8 md:py-3" 
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
