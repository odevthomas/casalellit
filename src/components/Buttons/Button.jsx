import React, { useState } from 'react'; // Importando React
import { motion } from 'framer-motion'; // Importando animações do framer-motion

const Button = ({ children, onClick, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar a visibilidade do tooltip

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)} // Exibe o tooltip ao passar o mouse
        onMouseLeave={() => setIsHovered(false)} // Esconde o tooltip ao sair
        className="inline-flex items-center justify-center py-3 px-6 text-white bg-gradient-to-r from-[#3e6125] to-[#d1c3bd] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3e6125]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }} // Efeito de aumento ao passar o mouse
        whileTap={{ scale: 0.95 }} // Efeito de diminuir ao clicar
        aria-label={tooltip} // Adicionando acessibilidade
      >
        {children}
      </motion.button>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded py-1 px-2 z-10 opacity-90 transition-opacity duration-300">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default Button;
