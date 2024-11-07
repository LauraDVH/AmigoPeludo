import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Archivo de barril que contiene todas mis paginas */
import {
  Nav,
  Home,
  Nosotros,
  Peludos, 
  Footer
} from "./pages/index";
import "./App.css";
function App() {
 
  return (
    <>
      {/* Enrutador general */}
      <BrowserRouter>
        {/* Componente Menu */}
        <Nav />
        {/* Contenedor de rutas */}
        <Routes>
          {/* Rutas individuales */}
          {/* Página de carros */}
          <Route path="/" element={<Home/>} />
          {/* Pagina individual de los tipos de carros */}
          {/* Página de motos */}
          <Route path="/peludos" element={<Peludos/>} />
          {/* Ruta de error */}
          <Route path="/nosotros" element={<Nosotros/>} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
