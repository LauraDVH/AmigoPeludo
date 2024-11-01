import { NavLink } from "react-router-dom";
import { useState } from 'react';

export const Nav = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  // Función para alternar el estado del menú
  const menuCelular = () => {
    setEstaAbierto(!estaAbierto);
  };

  return (
    <>
      <nav className="flex p-4 space-x-5 uppercase border border-gray-600 border-solid bg-slate-900 justify-end">
        <div className="flex space-x-10 mr-8">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 font-semibold border-b-2 border-sky-500"
                : "text-gray-600 hover:text-sky-500"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 font-semibold border-b-2 border-sky-500"
                : "text-gray-600 hover:text-sky-500"
            }
            to={"/peludos"}
          >
            Peludos
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 font-semibold border-b-2 border-sky-500"
                : "text-gray-600 hover:text-sky-500"
            }
            to={"/nosotros"}
          >
            Nosotros
          </NavLink>
        </div>
        <div className="text-2xl md:hidden">
          <button onClick={menuCelular}>
          <i class="fa-solid fa-laptop"></i>
          </button>
        </div>
      </nav>
      {/* Menú desplegable para móviles */}
      {estaAbierto && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-600 text-center">
          <NavLink to="/" className="block w-full py-2 hover:text-gray-200 rounded p-1">
            Inicio
          </NavLink>
          <NavLink to="/servicios" className="block w-full py-2 hover:text-gray-200 rounded p-1">
            Servicios
          </NavLink>
          <NavLink to="/nosotros" className="block w-full py-2 hover:text-gray-200 rounded p-1">
            Nosotros
          </NavLink>
          <NavLink to="/pqr" className="block w-full py-2 hover:text-gray-200 rounded p-1">
            PQR
          </NavLink>
          <NavLink to="/contacto" className="block w-full py-2 hover:text-gray-200 rounded p-1">
            Contacto
          </NavLink>
          <NavLink to="/ubicacion" className="block w-full py-2 hover:text-gray-200 rounded p-1">
            Ubicación
          </NavLink>
        </div>
      )}
    </>
  );
};

