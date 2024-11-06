// card.js
import React from "react";

export const Cards = ({ data }) => {
  const { url, breeds } = data;
  const breedName = breeds.length > 0 ? breeds[0].name : "Raza desconocida";

  return (
    <div className="relative p-2 m-3 mx-5 overflow-hidden text-center border-2 border-purple-700 rounded-full shadow-xl group ">
      <img
        src={url}
        alt={breedName}
        className="object-cover h-40 mx-auto transition-transform duration-300 ease-in-out rounded-full w-45 imagenes group-hover:scale-110" // Ajusta aquí el tamaño (por ejemplo, 32x32)
      />
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-purple-900 bg-opacity-50 opacity-0 group-hover:opacity-100">
        <p className="font-semibold text-white">{breedName}</p>
      </div>{" "}
    </div>
  );
};
