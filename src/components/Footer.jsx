import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#724b82] via-[#b06a9c] to-[#724b82] text-white py-10 px-5">
      {/* Contenedor principal */}
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 items-center">
        {/* Imagen de icono */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/img/icono1.png"
            alt="Icono de la empresa"
            className="w-60 h-60 lg:w-64 lg:h-64 object-contain"
          />
        </div>

        {/* Información de la Empresa */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">Amigos Peludos</h2>
          <p className="mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gachetá+Cundinamarca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-150"
            >
              Gachetá, Cundinamarca, Colombia
            </a>
          </p>
          <p className="mb-2 flex items-center">
            <FaPhone className="mr-2" /> +57 3144695811
          </p>
          <p className="mb-2 flex items-center">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:admin@peluditos.com"
              className="hover:text-gray-300 transition duration-150"
            >
              admin@peluditos.com
            </a>
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">Síguenos</h2>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-150"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-150"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-150"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Botón de WhatsApp */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
          <p className="mb-4">
            ¿Tienes alguna pregunta? ¡Escríbenos por WhatsApp!
          </p>
          <a
            href="https://wa.me/573144695811?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Amigos%20Peludos."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white flex items-center px-4 py-2 rounded-full hover:bg-green-600 transition duration-150"
          >
            <FaWhatsapp className="mr-2" /> Contáctanos
          </a>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center">
        <p>&copy; {Year} Amigos Peludos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
