import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./home.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
      <div className="flex w-full pr-1 mb-4 space-x-8">
        <div className="w-2/3 h-auto mt-24 text-5xl text-center font-league Spartan ">
          <p className="font-bold text-[#7161EF] hover:text-[#6F2DBD] leading-tight mb-14">
            Descubre el compañero perfecto para tu vida: Encuentra la raza de
            perro que se adapta a ti y a tu familia!
          </p>

          <botton className="bg-[#004369] text-white font-league Spartan font-bold p-1 px-5 rounded-full text-4xl border-none hover:bg-[#B79CED] hover:text-[#EFD9CE]">
            {" "}
            Me interesa{" "}
          </botton>
        </div>
        <div className="w-1/2 pb-2 mt-6 ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.5}
            spaceBetween={50}
            autoplay={{
              delay: 4000,
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

            <div className="slider-controler">
              <div className="transition ease-in-out swiper-button-prev hover:text-white "></div>
              <div className="transition ease-in-out swiper-button-next hover:text-white"></div>
            </div>
          </Swiper>
        </div>
      </div>
      <hr />
      <div className="bg-[#EFD9CE] w-3/4 mx-auto p-6 rounded-lg shadow-2xl mt-8 mb-10">
        <h1 className="text-center text-5xl font-bold text-[#551a57] mb-16">
          Te entregamos tu cachorro
        </h1>
        <div className="flex flex-wrap justify-center gap-10 text-2xl font-bold text-center text-[#957FEF] ">
          <div className="flex flex-col items-center">
            <img
              src={icono_1}
              alt="imagen de perro"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600">Certificado de raza</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={icono_3}
              alt="imagen de carton de vacuna"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600">Salud por escrito</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={icono_4}
              alt="imagen vacunacion de perro"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600">Vacunados y desparacitados</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={icono_2}
              alt="imagen de patita de perro"
              className="w-24 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="hover:text-purple-600">Obsequio</p>
          </div>
        </div>
      </div>
    </div>
  );
};
