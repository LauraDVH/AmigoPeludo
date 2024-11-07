import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Feed from '../components/imagenesPerros'; // Importa Feed
import "./home.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import huellas from "../assets/image/huellas.png";

import {
  EffectCoverflow,
  Pagination,
  Navigation, 
  Autoplay,
} from "swiper/modules";

import slide_image_1 from "../assets/images/img-1.jpg";
import slide_image_2 from "../assets/images/img-2.jpg";
import slide_image_3 from "../assets/images/img-3.jpg";
import slide_image_4 from "../assets/images/img-4.jpg";
import slide_image_5 from "../assets/images/img-5.jpg";
import slide_image_6 from "../assets/images/img-6.jpg";
import slide_image_7 from "../assets/images/img-7.avif";
import slide_image_8 from "../assets/images/img-8.avif";
import icono_1 from "../assets/images/perro.png";
import icono_2 from "../assets/images/patita.png";
import icono_3 from "../assets/images/vacunacion.png";
import icono_4 from "../assets/images/VacunaPerro.png";

export const Home = () => {
  return (
    <div className="contenedor">
     <div className="flex flex-col w-full pr-1 mb-4 space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:mt-4">
  {/* Imagen de huellas en la esquina superior izquierda */}
  <img
    className="absolute left-0 w-24 h-24 m-2 opacity-10 top-30 md:w-48 md:h-48 md:m-4"
    src={huellas}
    alt="Huellas"
  />
  {/* Imagen de huellas en la esquina superior izquierda */}
  <img
    className="absolute w-24 h-24 m-2 opacity-10 top-2/3 left-1/4 md:w-48 md:h-48 md:m-4 md:left-1/3"
    src={huellas}
    alt="Huellas"
  />

  {/* Texto principal */}
  <div className="order-2 w-full h-auto mx-1 mt-6 text-3xl text-center md:w-2/3 md:text-5xl md:order-1 ">
    <p className="font-semibold text-[rgb(113,97,239)] hover:text-[#b298dc] leading-tight mb-6 md:mb-16 font-itim m-3">
      Descubre el compañero perfecto para tu vida: Encuentra la raza de perro que se adapta a ti y a tu familia!
    </p>
    <a
      href="https://wa.me/+573144695811"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 md:p-3 text-2xl md:text-2xl font-semibold text-white bg-[#724b82] rounded-full flex items-center justify-center hover:bg-[#5d3d66] transition duration-150 w-40 md:w-64 mx-auto md:mt-16"
    >
      Me interesa
    </a>
  </div>

  {/* Carrusel */}
  <div className="order-1 w-full pb-2 md:w-1/2 md:order-2">
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={1.5}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={800}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={slide_image_1} alt="slider_image_1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_2} alt="slider_image_2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_3} alt="slider_image_3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_4} alt="slider_image_4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_5} alt="slider_image_5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_6} alt="slider_image_6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_7} alt="slider_image_7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_8} alt="slider_image_8" />
      </SwiperSlide>

      <div className="space-x-14 slider-controler ">
        <div className="transition ease-in-out  swiper-button-prev hover:text-white"></div>
        <div className="transition ease-in-out swiper-button-next hover:text-white"></div>
      </div>
    </Swiper>
  </div>
</div>

      <hr />
      <div className="bg-[#EFD9CE] w-3/4 mx-auto p-6 rounded-lg shadow-2xl mt-8 mb-20">
       {/* Imagen de huellas en la esquina superior izquierda */}
       <img
          className="absolute w-24 m-4 mt-5 h-248 left-36 top-full opacity-10 md:w-48 md:h-48"
          src={huellas}
          alt="Huellas"
        />
    
        <h1 className="text-center text-4xl font-bold text-[#551a57] mb-16 titulo md:text-5xl">
          Te entregamos tu cachorro
        </h1>
        <div className="flex flex-wrap justify-center gap-10 text-2xl font-bold text-center text-[#957FEF]  ">
          <div className="flex flex-col items-center">
          <img
              src={icono_1}
              alt="imagen vacunacion de perro"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600 texto font-itim">
              Certificado de raza
            </p>
          </div>

          <div className="flex flex-col items-center">
          <img
              src={icono_3}
              alt="imagen vacunacion de perro"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600 font-itim">Salud por escrito</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={icono_4}
              alt="imagen vacunacion de perro"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600 font-itim">
              Vacunados y desparacitados
            </p>
          </div>

          <div className="flex flex-col items-center">
          <img
              src={icono_2}
              alt="imagen vacunacion de perro"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600 font-itim">Obsequio</p>
          </div>
        </div>
      </div>
      <h3 className="text-4xl font-bold text-[#551a57] mb-16 titulo text-center md:text-5xl">Algunos de nuestros peludos</h3>
    
    
      <Feed />
     
    </div>
  );
};
