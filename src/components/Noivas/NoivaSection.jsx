"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { memo, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dados das imagens
const images = [
  { src: '/SlideNoivas/slide1.webp', alt: 'Imagem 1', text: 'Capturando a beleza que brilha em cada sorriso.' },
  { src: '/SlideNoivas/slide2.webp', alt: 'Imagem 2', text: 'Cada clique conta a história do seu amor.' },
  { src: '/SlideNoivas/slide3.webp', alt: 'Imagem 3', text: 'Momentos preciosos que eternizam sua felicidade.' },
  { src: '/SlideNoivas/slide4.webp', alt: 'Imagem 4', text: 'A noiva radiante, cercada por amor e alegria.' },
  { src: '/SlideNoivas/slide5.webp', alt: 'Imagem 5', text: 'A magia do amor refletida em cada imagem.' },
];

// Configurações do Slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false, // Remove as setas padrão
  pauseOnHover: true, // Pausa o slide quando o usuário passa o mouse sobre o slider
};

const ImageCarousel = () => {
  const sliderRef = useRef(null); // Referência ao Slider para controle das setas

  const handleImageError = (event) => {
    event.target.src = "/SlideHome/noiva-cabelo-maquiagem-casa-lellit.webp"; // Imagem de fallback
  };

  return (
    <section aria-label="Galeria Casa L’Ellit" className="overflow-hidden w-full h-full m-0 p-0">
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 150 }}
      >
        <Slider ref={sliderRef} {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 border-none" // Remove borda
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onError={handleImageError}
              />
              <div className="absolute inset-0 flex items-center justify-center text-center text-gray-100 bg-gray-900 bg-opacity-60 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
                <span className="text-lg sm:text-2xl font-bold">{image.text}</span>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button
            className="text-[#ffffffc9] text-xl transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#b7b7b7e4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
            onClick={() => sliderRef.current.slickPrev()}
            aria-label="Ir para o slide anterior"
          >
            &#10094; {/* Left arrow */}
          </button>
          <button
            className="text-[#ffffffc9] text-xl transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#ffffffe4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
            onClick={() => sliderRef.current.slickNext()}
            aria-label="Ir para o próximo slide"
          >
            &#10095; {/* Right arrow */}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(ImageCarousel);
