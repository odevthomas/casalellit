import React, { useRef } from "react"; // Importando React
import Slider from "react-slick"; // Importando o Slider
import "slick-carousel/slick/slick.css"; // Estilos do Slider
import "slick-carousel/slick/slick-theme.css"; // Temas do Slider

// Main ImageCarousel Component
const ImageCarousel = () => {
  const sliderRef = useRef(null); // Referência para o slider

  const images = [
    {
      src: "/SlideHome/noiva-cabelo-maquiagem-casa-lellit.webp",
      alt: "Noiva com cabelo e maquiagem impecáveis na Casa L’Ellit em Campinas",
      text: "Detalhes que capturam a essência da verdadeira elegância.",
    },
    {
      src: "/SlideHome/noiva-posando-casa-lellit-campinas.webp",
      alt: "Noiva posando na Casa L’Ellit em Campinas com look elegante para casamento",
      text: "Onde a beleza encontra a perfeição em cada olhar.",
    },
    {
      src: "/SlideHome/noiva-preparacao-casa-lellit-campinas.webp",
      alt: "Preparação de noiva com maquiagem e penteado na Casa L’Ellit em Campinas",
      text: "Preparação sublime para o grande momento da vida.",
    },
    {
      src: "/SlideHome/detalhes-noiva-cabelo-maquiagem-casa-lellit-campinas.webp",
      alt: "Detalhes do penteado e maquiagem de noiva na Casa L’Ellit, especializada em casamentos em Campinas",
      text: "Cada detalhe, revela sua essência única!",
    },
  ];

  // Configurações do slider
  const settings = {
    dots: true,
    infinite: false, // Desativando loop infinito
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Desativando autoplay
    arrows: true, // Ativando setas de navegação
    fade: true,
    cssEase: "ease-in-out",
  };

  return (
    <section aria-label="Galeria Casa L’Ellit" className="relative w-full h-screen">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-screen flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-30 text-white px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg sm:text-2xl font-light">{image.text}</p>
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
    </section>
  );
};

export default ImageCarousel;