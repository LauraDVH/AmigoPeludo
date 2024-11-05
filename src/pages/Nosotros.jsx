import React from "react";
import pomerania01 from "../assets/image/pomerania01.jpg";
import huellas from "../assets/image/huellas.png";
import pastor from "../assets/image/pastor.jpg";

export const Nosotros = () => {
  return (
    <>
      <div className="flex items-center justify-center p-6 text-[#004369]">
        <div className="flex flex-col md:flex-row bg-[#fff4f0] px-10 py-5 items-center w-full gap-6 mx-10 shadow-lg relative">
          {/* Imagen de huellas en la esquina superior izquierda */}
          <img
            className="absolute top-0 left-0 opacity-10 w-48 h-48 m-4"
            src={huellas}
            alt="Huellas"
          />

          {/* Imagen de huellas en la esquina inferior derecha */}
          <img
            className="absolute bottom-0 right-0 opacity-10 w-48 h-48 m-4"
            src={huellas}
            alt="Huellas"
          />

          {/* Sección de texto */}
          <div className="md:w-2/3 w-full relative z-10">
            <h1 className="font-bold text-center mb-4 text-4xl md:text-5xl lg:text-6xl">
              Misión
            </h1>
            <p className="text-center text-base md:text-lg lg:text-xl">
              Nuestra misión es proporcionar una plataforma completa y confiable
              que permita a los futuros propietarios de mascotas tomar
              decisiones bien informadas antes de adquirir un perro. Queremos
              garantizar que cada cliente comprenda plenamente las
              características, necesidades y comportamientos específicos de la
              raza que elige, desde su tamaño y peso en la adultez hasta su
              temperamento y expectativa de vida. Nuestro objetivo es fomentar
              una compra responsable y consciente, ayudando a los futuros dueños
              a elegir una mascota que se adapte a su estilo de vida, ya sea
              para compañía en el hogar, actividades familiares, trabajo
              especializado como perros guía, o para prácticas deportivas como
              la caza. Al brindar información detallada y asesoramiento
              personalizado, buscamos reducir la cantidad de perros que son
              abandonados o reubicados debido a expectativas no cumplidas.
            </p>
          </div>

          {/* Sección de imagen */}
          <div className="md:w-1/2 w-full flex justify-center p-0 m-0">
            <img
              className="rounded-full w-80 h-80 object-cover shadow-md"
              src={pomerania01}
              alt="Pomerania"
            />
          </div>
        </div>
      </div>

      {/* CONTENEDOR VISIÓN */}
      <div className="flex items-center justify-center p-6 text-[#004369]">
        <div className="flex flex-col md:flex-row bg-[#fff4f0] px-10 py-5 items-center w-full gap-6 mx-10 shadow-lg relative">
          {/* Sección de imagen */}
          <div className="md:w-1/2 w-full flex justify-center p-0 m-0">
            <img
              className="rounded-full w-80 h-80 object-cover shadow-md"
              src={pastor}
              alt="Pomerania"
            />
          </div>
          {/* Imagen de huellas en la esquina superior izquierda */}
          <img
            className="absolute top-0 left-0 opacity-10 w-48 h-48 m-4"
            src={huellas}
            alt="Huellas"
          />

          {/* Imagen de huellas en la esquina inferior derecha */}
          <img
            className="absolute bottom-0 right-0 opacity-10 w-48 h-48 m-4"
            src={huellas}
            alt="Huellas"
          />

          {/* Sección de texto */}
          <div className="md:w-2/3 w-full relative z-10">
            <h1 className="font-bold text-center mb-4 text-4xl md:text-5xl lg:text-6xl">
              Visión
            </h1>
            <p className="text-center text-base md:text-lg lg:text-xl">
              Ser la plataforma líder en la venta responsable de perros,
              destacándonos como una fuente confiable de información y asesoría
              para futuros propietarios. Aspiramos a reducir la cantidad de
              mascotas que son abandonadas o devueltas, educando a las personas
              para que comprendan y respeten las necesidades únicas de cada raza
              y seleccionen una mascota que realmente se ajuste a sus
              expectativas y estilo de vida.
            </p>
          </div>
        </div>
      </div>
  
    </>
  );
};
