import { NavLink } from "react-router-dom";
import { useState } from 'react';

export const Nav = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  // Función para alternar el estado del menú
  const menuCelular = () => {
    setEstaAbierto(!estaAbierto);
  };

  // Función para cerrar el menú
  const cerrarMenu = () => {
    setEstaAbierto(false);
  };

  return (
    <>
      <nav className="top-0 left-0 w-full flex items-center p-6 space-x-5 uppercase border-b bg-gradient-to-r bg-gradient-to-r from-[#724b82] via-[#b06a9c] to-[#724b82] border-solid justify-between z-20 text-[1rem]">
        {/* Contenedor del ícono */}
        <div className="flex imagen items-center space-x-3 [@media(max-width:640px)]:relative [@media(max-width:640px)]:left-12">
          <img src='/img/icono.png' alt="Icono" className="w-30 h-15" />
        </div>
        {/* Menú de navegación en pantallas grandes */}
        <div className="space-x-10 hidden md:flex mr-8">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 font-merriweather"
                : "text-white hover:text-gray-300 font-merriweather"
            }
            to={"/"}
            onClick={cerrarMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2"
                : "text-white hover:text-gray-300"
            }
            to={"/peludos"}
            onClick={cerrarMenu}
          >
            Peludos
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2"
                : "text-white hover:text-gray-300"
            }
            to={"/nosotros"}
            onClick={cerrarMenu}
          >
            Nosotros
          </NavLink>
        </div>

        {/* Botón de menú para móviles */}
        <div className="text-2xl md:hidden">
          <button onClick={menuCelular}>
            <i className="fa-solid fa-bars text-[28px]"></i>
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      {estaAbierto && (
        <div className="md:hidden absolute left-0 w-full bg-white shadow-xl border-gray-200 text-center z-30">
          <NavLink 
            to="/" 
            className="block w-full py-2 hover:text-gray-200 rounded p-1 font-merriweather"
            onClick={cerrarMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/peludos" 
            className="block w-full py-2 hover:text-gray-200 rounded p-1"
            onClick={cerrarMenu}
          >
            Peludos
          </NavLink>
          <NavLink 
            to="/nosotros" 
            className="block w-full py-2 hover:text-gray-200 rounded p-1"
            onClick={cerrarMenu}
          >
            Nosotros
          </NavLink>
        </div>
      )}
    </>
  );
};
