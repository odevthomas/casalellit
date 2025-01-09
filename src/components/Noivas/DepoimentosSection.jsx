"use client"; // Indica que este módulo deve ser tratado como cliente

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DepoimentosSection = () => {
  const depoimentos = [
    {
      name: "Mariana S.",
      feedback: "O meu Dia da Noiva na Casa Casalellit foi absolutamente mágico! Fui tratada com tanto carinho, e tudo aconteceu do jeitinho que eu sonhei.",
      rating: 5,
    },
    {
      name: "Juliana A.",
      feedback: "A experiência foi única! Cada detalhe foi pensado para me proporcionar um dia perfeito. Me senti confortável e linda do começo ao fim.",
      rating: 5,
    },
    {
      name: "Fernanda M.",
      feedback: "Nunca imaginei que poderia me sentir tão especial. A equipe da Casa Casalellit fez todo o processo de preparação tão incrível e emocionante!",
      rating: 5,
    },
    {
      name: "Sofia T.",
      feedback: "O atendimento foi impecável! A atenção aos detalhes fez toda a diferença. Me senti cuidada e única em cada momento.",
      rating: 5,
    },
    {
      name: "Carla P.",
      feedback: "O serviço é de altíssima qualidade. Não só o dia foi perfeito, mas a preparação para o casamento foi igualmente maravilhosa!",
      rating: 4,
    },
    {
      name: "Ana L.",
      feedback: "O carinho da equipe e o ambiente acolhedor tornaram o meu dia inesquecível. Cada detalhe foi pensado para me deixar confortável e feliz!",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Velocidade da transição das slides
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ativando as setas
    fade: true,
    prevArrow: (
      <button className="slick-prev">
        <span className="slick-arrow-icon">←</span>
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <span className="slick-arrow-icon">→</span>
      </button>
    ),
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-yellow-500 ${i < rating ? "text-yellow-500" : "text-[#bbb]"}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="depoimentos" className="py-28 bg-[#f6eee3bb] text-white" aria-labelledby="depoimentos-section">
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <header className="text-center mb-12">
          <motion.h4
            className="text-5xl font-serif text-[#6d3406] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Confira o que elas têm a dizer sobre o dia mais especial da vida!
            
          </motion.h4>
          <motion.p
            className="text-lg text-[#000000] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cada história compartilhada por nossas noivas é um testemunho do amor, cuidado e dedicação que colocamos em cada momento.
          </motion.p>
        </header>

        <div className="relative">
          <Slider {...settings}>
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="relative">
                <motion.blockquote
                  className="italic text-lg text-[#fff] max-w-3xl mx-auto text-center px-4"
                  style={{
                    backgroundColor: '#7b564361',
                    padding: '40px 20px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    fontWeight: 'bold',
                    transition: 'opacity 0.5s ease',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-[#ffffff] text-xl">{`"${depoimento.feedback}"`}</p>
                  <footer className="text-gray-900 text-md font-semibold">
                    <span>- {depoimento.name}</span>
                  </footer>
                  <div className="mt-4">
                    {renderStars(depoimento.rating)}
                  </div>
                </motion.blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
