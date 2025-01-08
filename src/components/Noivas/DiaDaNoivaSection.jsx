"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BotaoAgendamento } from "../Buttons/BotaoAgendar"; // Botão de agendamento

const DiaDaNoivaSection = () => {
  const imagens = [
    { src: '/DiaDaNoivaSection/dia-danoiva-casa-lellit-campinas1.webp' },
    { src: '/DiaDaNoivaSection/dia-danoiva-casa-lellit-campinas2.webp' },
    { src: '/DiaDaNoivaSection/dia-danoiva-casa-lellit-campinas3.webp' },
    { src: '/DiaDaNoivaSection/dia-danoiva-casa-lellit-campinas4.webp' },
    { src: '/DiaDaNoivaSection/dia-danoiva-casa-lellit-campinas6.webp' },
    { src: '/DiaDaNoivaSection/dia-danoiva-casa-lellit-campinas7.webp' },
    { src: '/DiaDaNoivaSection/dia-danoiva-casa-lellit-campinas9.webp' },
  ];

  const sliderRef = useRef(null); // Ref para o slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Removido autoplay
    arrows: true, // Reativei as setas de navegação
    beforeChange: (current, next) => {},
    afterChange: (current) => {},
  };

  return (
    <section id="dia-da-noiva" className="py-16 bg-[#f6eee3] text-gray-900 dark:text-gray-100">
      <div className="max-w-full mx-auto px-4 xl:px-0">
        <header className="text-center mb-8">
          <motion.h2 
            className="text-5xl font-serif text-[#4f2909] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Elegância e Sofisticação: Seu Dia de Noiva na Casa L’Ellit
          </motion.h2>
          <motion.p
            className="text-xl font-medium text-[#000000c3]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Com um legado de tornar realidade os sonhos de mais de 2.500 noivas, a Casa L’Ellit é sinônimo de excelência e requinte.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="relative">
            <motion.div
              className="carousel-container overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
            >
              <Slider ref={sliderRef} {...settings}>
                {imagens.map((imagem, index) => (
                  <div key={index} className="w-full">
                    <div className="relative">
                      <img
                        src={imagem.src}
                        alt={`Imagem noiva ${index + 1}`}
                        className="w-full h-[700px] sm:h-[700px] object-cover rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="bg-transparent border-[#ffffffc9] text-[#ffffffc9] text-xl  transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#b7b7b7e4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Ir para o slide anterior"
        >
          &#10094; {/* Left arrow */}
        </button>
        <button
          className="bg-transparent border-[#ffffffc9] text-[#ffffffc9] text-xl  transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#ffffffe4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Ir para o próximo slide"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-between pt-5">
            <motion.p
              className="text-lg text-[#000000c3]  text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
        Na Casa L'Ellit, cada noiva é tratada com o mais alto padrão de excelência, onde cada detalhe é meticulosamente planejado para elevar o seu grande dia a um patamar de pura magia. Dos penteados deslumbrantes às maquiagens impecáveis, nossa equipe renomada se dedica a realçar a beleza e a elegância de cada noiva, garantindo que ela se sinta como a protagonista de um conto de fadas moderno, radiante e confiante.
            </motion.p>
            <motion.p
              className="text-lg text-[#000000c3] mb-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
        Além disso, as madrinhas também recebem um tratamento especial, sendo recebidas com carinho e atenção para contribuir com a criação de um ambiente de amor e celebração. Os momentos de preparação se transformam em lembranças preciosas, repletas de sorrisos, emoções e cumplicidade, fortalecendo os laços de amizade e tornando o dia ainda mais marcante.
            </motion.p>
            <motion.p
              className="text-lg text-[#000000c3] mb-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
            Nesse dia tão especial, os gestos de cuidado e os mimos especiais não passam despercebidos, proporcionando à noiva e suas convidadas uma experiência única e memorável. Cada detalhe é pensado para criar um ambiente de harmonia e beleza, onde a noiva brilha como a estrela principal e suas acompanhantes se sentem acolhidas e valorizadas, fazendo parte de um momento único e encantador.
            </motion.p>
  <motion.p
              className="text-lg text-[#000000c3] mb-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
         A Casa L'Ellit se torna o cenário perfeito para esses momentos únicos, onde a preparação para o grande dia se transforma em uma jornada de beleza, autoconfiança e felicidade compartilhada. Cada pincelada, cada penteado, cada palavra de encorajamento contribuem para tornar esse dia especial ainda mais inesquecível, repleto de emoções genuínas e sorrisos radiantes.
            </motion.p>
         
            {/* Botão de Agendamento com destaque */}
            <motion.div 
              className="mt-6 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <BotaoAgendamento />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navegação com setas */}
    
    </section>
  );
};

export default DiaDaNoivaSection;
