import React, { useRef } from "react"; // Importando React e useRef
import Slider from "react-slick"; // Importando o Slider
import "slick-carousel/slick/slick.css"; // Estilos do Slider
import "slick-carousel/slick/slick-theme.css"; // Temas do Slider

// Dados das noivas
const noivasData = [
  {
    name: "Noiva 3",
    description: "Estilo e sofisticação em cada detalhe.",
    images: [
      "/Noivas Reais/noiva3-1.webp",
      "/Noivas Reais/noiva3-2.webp",
      "/Noivas Reais/noiva3-3.webp",
    ],
  },
  {
    name: "Noiva 1",
    description: "Detalhes e beleza deslumbrantes.",
    images: [
      "/Noivas Reais/noiva1-1.webp",
      "/Noivas Reais/noiva1-2.webp",
      "/Noivas Reais/noiva1-3.webp",
      "/Noivas Reais/noiva1-4.webp",
    ],
  },
  {
    name: "Noiva 4",
    description: "Um momento tão especial merece cuidado.",
    images: [
      "/Noivas Reais/noiva4-0.webp",
      "/Noivas Reais/noiva4-1.webp",
      "/Noivas Reais/noiva4-2.webp",
      "/Noivas Reais/noiva4-3.webp",
      "/Noivas Reais/noiva4-4.webp",
      "/Noivas Reais/noiva4-5.webp",
    ],
  },
];

const GallerySection = () => {
  // Inicializando um array de referências para cada slider
  const sliderRefs = useRef([]);

  // Configurações do slider
  const sliderSettings = {
    infinite: false, // Desativando loop infinito
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Desativando autoplay
    arrows: false, // Desativando as setas padrão
  };

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-0 sm:px-6 py-24">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-heading text-[#000000] mb-4">
          Cuidando de Cada Detalhe para o Seu Grande Dia
        </h2>
        <p className="mb-10 text-lg font-medium text-[#000000c3]">
          Inspire-se nas noivas que confiaram em nosso cuidado para o dia mais especial de suas vidas. Cada detalhe pensado para refletir sua beleza e tornar seu momento único. Seu grande dia começa aqui.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {noivasData.map((noiva, noivaIndex) => (
            <div key={noivaIndex} className="relative overflow-hidden group bg-[#ffffff58cc] shadow-xl hover:shadow-2xl rounded-lg transition-all duration-800 ease-in-out">
              <div className="relative overflow-hidden rounded-t-lg">
                {/* Carrossel específico para cada noiva */}
                <Slider
                  ref={(el) => (sliderRefs.current[noivaIndex] = el)} // Atribuindo uma referência única para cada slider
                  {...sliderSettings}
                >
                  {noiva.images.map((image, idx) => (
                    <div key={idx} className="w-full h-auto flex justify-center items-center">
                      <img
                        src={image} // Imagem carregada imediatamente
                        alt={`Imagem de noiva ${noiva.name}, foto ${idx + 1}`}
                        className="w-full max-h-[550px] object-cover rounded-t-lg"
                      />
                    </div>
                  ))}
                </Slider>
                {/* Custom Navigation Arrows */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                  <button
                    className="text-[#ffffffc9] text-xl transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#b7b7b7e4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
                    onClick={() => sliderRefs.current[noivaIndex].slickPrev()} // Controlando o slider específico
                    aria-label="Ir para o slide anterior"
                  >
                    &#10094; {/* Left arrow */}
                  </button>
                  <button
                    className="text-[#ffffffc9] text-xl transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#ffffffe4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
                    onClick={() => sliderRefs.current[noivaIndex].slickNext()} // Controlando o slider específico
                    aria-label="Ir para o próximo slide"
                  >
                    &#10095; {/* Right arrow */}
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-lg lg:text-xl font-medium text-[#000000c3] leading-relaxed">
                  {noiva.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
