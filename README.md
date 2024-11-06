
# Amigopeludo

**Amigopeludo**, es una aplicación que facilita la conexión entre usuarios interesados en el cuidado y compra de mascotas. La aplicación cuenta con un frontend desarrollado en React y se enfoca en proporcionar una experiencia de usuario atractiva y amigable, utilizando Material UI, Swiper para carruseles de contenido, y TailwindCSS para estilos.

## Tabla de Contenidos
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Despliegue](#despliegue)


## Características
- **UI Interactiva y Dinámica**: Uso de Swiper para carruseles de contenido visualmente atractivos.
- **Estilos Modernos**: Uso de TailwindCSS y Material UI para un diseño limpio y moderno.
- **Ruteo Dinámico**: Integración de react-router-dom para navegación en múltiples vistas.
- **Componentes Reutilizables**: Desarrollo de componentes modulares y reutilizables utilizando la librería de íconos react-icons.

## Tecnologías Utilizadas
Este proyecto utiliza las siguientes tecnologías:

- **React** (v18.3.1): Biblioteca principal para la interfaz de usuario.
- **React Router Dom** (v6.27.0): Navegación entre vistas.
- **Material UI** (v6.1.6): Componentes de UI predefinidos.
- **TailwindCSS** (v3.4.14): Estilización de componentes.
- **Swiper** (v11.1.14): Componente de carrusel.
- **React Icons** (v5.3.0): Biblioteca de iconos vectoriales para React.
- **Vite** (v5.4.10): Herramienta de desarrollo para aplicaciones rápidas y ligeras.
- **ESLint**: Linter para mantener la calidad del código.

## Estructura del Proyecto
La estructura principal del proyecto es la siguiente:

```plaintext
amigopeludo/
├── public/                  # Archivos estáticos
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── pages/               # Páginas principales de la aplicación
│   ├── styles/              # Archivos de estilos (CSS/Tailwind)
│   ├── App.jsx              # Componente raíz
│   ├── main.jsx             # Punto de entrada de React
├── .eslintrc.js             # Configuración de ESLint
├── tailwind.config.js       # Configuración de TailwindCSS
└── package.json             # Configuración del proyecto y dependencias
```

## Instalación
Para instalar y ejecutar el proyecto en un entorno local, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/usuario/amigopeludo.git
   cd amigopeludo
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto:**
   ```bash
   npm run dev
   ```

4. **Visita** `http://localhost:3000` para ver la aplicación en el navegador.

## Scripts Disponibles

En el archivo `package.json` se encuentran los siguientes scripts:

- `dev`: Inicia el servidor de desarrollo usando Vite.
- `build`: Genera una versión optimizada de la aplicación para producción.
- `preview`: Muestra una vista previa de la aplicación en producción.
- `lint`: Ejecuta ESLint para verificar la calidad del código.



## Despliegue