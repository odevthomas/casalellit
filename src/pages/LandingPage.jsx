"use client"; // Indica que este módulo deve ser tratado como cliente

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importando ícones do react-icons
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(true); 
  const navigate = useNavigate(); 

  const handleClick = () => {
    setIsVisible(false); 
    navigate('/casaLellit');  // Corrigido o caminho da rota
  };

  return (
    <motion.div
      className={`relative w-full h-screen ${isVisible ? '' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/CasaLelit/ambiente-piscina2-casa-lellit-campinas.webp')" }}  // Imagem de fundo
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-6 sm:px-12 md:px-24">
            {/* Substituindo o título e descrição por uma imagem */}
            <img 
              src="logo.png" // Ajuste o caminho da imagem
              alt="Casa L’Ellit"
              className="mb-6"
              style={{ filter: 'invert(1) brightness(2)' }} // Filtro para deixar a imagem mais branca
            />
            <button
              aria-label="Clique para conhecer os serviços"
              className="btn"
              onClick={handleClick}
            >
              Conheça os serviços
            </button>
          </div>
        </div>
      </div>

      {/* Rodapé com ícones das redes sociais */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-6 sm:space-x-8 md:space-x-10">
        <a
          href="https://www.instagram.com/casalellit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={25} className="text-white hover:text-[#f46d40] transition-all duration-150" />
        </a>
        <a
          href="https://www.facebook.com/casalellit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={25} className="text-white hover:text-[#3b5998] transition-all duration-150" />
        </a>
      </div>
    </motion.div>
  );
};

export default LandingPage;
