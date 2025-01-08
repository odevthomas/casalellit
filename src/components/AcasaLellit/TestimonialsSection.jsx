"use client"; // Indica que este módulo deve ser tratado como cliente

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DepoimentosSection = () => {
  const depoimentos = [
    { name: "Maria Silva", feedback: "Meu cabelo para a formatura ficou simplesmente deslumbrante! Recebi tantos elogios!", rating: 5 },
    { name: "Joana Pereira", feedback: "O atendimento foi maravilhoso e o resultado superou minhas expectativas. As mechas ficaram perfeitas!", rating: 5 },
    { name: "Fernanda Souza", feedback: "A experiência foi incrível! Todos foram super atenciosos e o meu visual ficou exatamente como eu sonhei.", rating: 5 },
    { name: "Ana Costa", feedback: "Profissionais incríveis! Meu penteado de noiva ficou impecável. Super recomendo!", rating: 5 },
    { name: "Patrícia Lima", feedback: "Adorei o atendimento e o serviço prestado! Me senti como uma verdadeira princesa no meu dia especial.", rating: 5 },
    { name: "Carla Mendes", feedback: "Além de super profissionais, eles também são extremamente atenciosos. Amei o resultado!", rating: 5 },
    { name: "Renata Oliveira", feedback: "Eu estava nervosa, mas o atendimento me deixou tranquila e o resultado foi maravilhoso. Meus amigos não paravam de elogiar!", rating: 5 },
    { name: "Sofia Silva", feedback: "O serviço é impecável! Fiquei apaixonada pelo meu penteado de formatura, superando todas as minhas expectativas.", rating: 5 },
    { name: "Luciana Ribeiro", feedback: "Simplesmente perfeito! O cuidado com cada detalhe fez toda a diferença para o meu evento.", rating: 5 },
    { name: "Mariana Gomes", feedback: "Me senti maravilhosa no meu grande dia. A equipe da Casa L'Ellit foi sensacional!", rating: 5 },
    { name: "Luciana Martins", feedback: "Fiquei encantada com o atendimento. O meu cabelo estava lindo e durou o evento todo sem sair do lugar.", rating: 5 },
    { name: "Gabriela Almeida", feedback: "Excelente atendimento e resultados impecáveis. Meu cabelo ficou perfeito para o casamento.", rating: 5 },
    { name: "Juliana Costa", feedback: "Me deixaram completamente à vontade e entregaram um serviço de qualidade, o que fez toda a diferença.", rating: 5 },
    { name: "Elaine Silva", feedback: "Eu sou grata pela dedicação da equipe. Meu penteado foi perfeito, assim como eu imaginei!", rating: 5 },
    { name: "Beatriz Pinto", feedback: "Foi uma experiência maravilhosa do início ao fim. Meu visual estava incrível e o atendimento foi impecável.", rating: 5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300, // Velocidade da transição das slides
    autoplay: true,
    autoplaySpeed: 3000, // Velocidade do autoplay
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ativando as setas
    fade: true,
    prevArrow: (
      <button className="slick-prev" aria-label="Previous slide">
        <span className="slick-arrow-icon">←</span>
      </button>
    ),
    nextArrow: (
      <button className="slick-next" aria-label="Next slide">
        <span className="slick-arrow-icon">→</span>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
          <motion.h2
            className="text-5xl md:text-4xl sm:text-3xl font-serif text-[#6d3406] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cada história compartilhada por nossas noivas é um testemunho do amor, cuidado e dedicação que colocamos em cada momento.
          </motion.h2>
          <motion.p
            className="text-lg sm:text-base text-[#000000] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Confira o que elas têm a dizer sobre o dia mais especial da vida!
          </motion.p>
        </header>

        <div className="relative">
          <Slider {...settings}>
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="relative">
                <motion.blockquote
                  className="italic text-lg text-[#fff] max-w-3xl mx-auto text-center px-4 sm:px-2"
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
