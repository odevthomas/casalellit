"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bridesImages = [
  {
    phrases: [
      "Preparando-se para o grande dia.",
      "A beleza que se revela a cada momento.",
      "Capturando a essência do amor.",
      "Sonhos se tornam realidade.",
    ],
    images: [
      "/NoivasGaleria/noiva1-casamento-cabelo-e-maquiagem-casa-lellit.webp",
      "/NoivasGaleria/noiva2-casamento-cabelo-e-maquiagem-casa-lellit.webp",
      "/NoivasGaleria/noiva3-casamento-cabelo-e-maquiagem-casa-lellit.webp",
    ],
  },
  {
    phrases: [
      "Cada detalhe conta uma história.",
      "Momento de reflexão e alegria.",
      "O amor está no ar.",
      "Sorrisos e emoções.",
      "O dia mais esperado.",
      "Transformações deslumbrantes.",
      "Memórias que durarão para sempre.",
    ],
    images: [
      "/NoivasGaleria/look-noiva-casamento-casa-lellit-campinas.webp",
      "/NoivasGaleria/preparacao1-noiva-casamento-casa-lellit.webp",
      "/NoivasGaleria/preparacao2-noiva-casamento-casa-lellit.webp",
      "/NoivasGaleria/preparacao3-noiva-casamento-casa-lellit.webp",
    ],
  },
  {
    phrases: [
      "A emoção do dia se aproxima.",
      "Sorrisos que iluminam o coração.",
      "Preparando-se para a nova vida.",
      "Amor e felicidade.",
      "A magia do dia.",
      "Momentos que aquecem o coração.",
      "Celebrando o amor.",
    ],
    images: [
      "/NoivasGaleria/detalhes7-noiva-cabelo-casa-lellit-campinas.webp",
      "/NoivasGaleria/detalhes1-noiva-cabelo-casa-lellit-campinas.webp",
      "/NoivasGaleria/detalhes2-noiva-cabelo-casa-lellit-campinas.webp",
      "/NoivasGaleria/detalhes4-noiva-cabelo-casa-lellit-campinas.webp",
      "/NoivasGaleria/detalhes5-noiva-cabelo-casa-lellit-campinas.webp",
      "/NoivasGaleria/detalhes6-noiva-cabelo-casa-lellit-campinas.webp",
    ],
  },
];

const NoivasGaleria = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  return (
    <section id="servicos" className="py-20 bg-[#f6eee3bb] text-white" aria-labelledby="services-section">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-4xl font-heading text-[#4f2909] mb-6">
          Dia da Noiva: Transforme seu Grande Dia em uma Jornada de Amor e Elegância
        </h2>
        <p className="text-lg text-[#1d1d1dd7] font-custom mb-10">
          Descubra a Magia dos NoivasGaleria, Brindes Especiais e Mimos para Você e Suas Madrinhas na Casa L'Ellit
        </p>

        {/* Galeria de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bridesImages.map((bride, brideIndex) => (
            <div key={brideIndex} className="group relative">
              <Slider {...settings}>
                {bride.images.map((image, index) => (
                  <div key={index} className="relative">
                    {image.endsWith(".mp4") ? (
                      <video
                        src={image}
                        controls
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        autoPlay
                        loop
                        muted
                      />
                    ) : (
                      <img
                        src={image}
                        alt={`Casamento ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 rounded-lg shadow-lg"
                      />
                    )}
                    {bride.phrases[index] && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
                        <p className="text-lg font-semibold">{bride.phrases[index]}</p>
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoivasGaleria;
