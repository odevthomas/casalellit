"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Importando os ícones de hambúrguer e fechar
import logo from "/logo.png";

const navigation = [
  { title: "Sobre a Casa", path: "/casalellit" },
  { title: "Seu Dia de Noiva", path: "#dia-da-noiva" },
  { title: "Galeria  ", path: "#noivasgaleria" },
  


];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showHeader, setShowHeader] = useState(true); // Estado para controlar a visibilidade do cabeçalho
  const location = useLocation();

  // Definir o índice ativo com base no caminho da URL
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItemIndex = navigation.findIndex(item => item.path === currentPath);
    setActiveIndex(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [location]);

  // Função para alternar o menu mobile
  const toggleMenu = () => {
    setMenuOpen(prev => !prev); // Alterna o estado de menuOpen
  };

  // Função de controle para quando o usuário clica em um item de navegação
  const handleClick = (index) => {
    setActiveIndex(index);
    setMenuOpen(false); // Fechar o menu no mobile após a seleção
  };

  // Adicionando o efeito de scroll para ocultar a logo e o menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(false); // Oculta o cabeçalho (logo + menu) quando rolar para baixo
      } else {
        setShowHeader(true); // Mostra o cabeçalho quando estiver no topo
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpeza do listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0"}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
    >
      {/* Background com gradiente e desfoque suave */}
      <div className="relative w-full h-[30vh] bg-gradient-to-b from-[#00000000] opacity-390">
        {/* Logo no canto esquerdo da barra de navegação, bem pequena */}
        <div className={`absolute top-5 left-5 flex items-center transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0"}`}>
          <a href="/">
            <img
              src={logo}
              alt="Logo Casa Lellit"
              className="h-10" // Logo bem pequena
              style={{
                filter: "invert(1) brightness(2) contrast(1.2)", // Aumenta brilho e contraste da logo
              }}
            />
          </a>
        </div>

        {/* Menu Mobile (Ícone) */}
        <div className="lg:hidden absolute top-5 right-5" onClick={toggleMenu} aria-label="Toggle mobile menu">
          <button className="text-white text-4xl p-2 relative z-20">
            {menuOpen ? (
              <FaTimes className="text-3xl" /> // Ícone de fechar (X) com tamanho ajustado
            ) : (
              <FaBars className="text-3xl" /> // Ícone de hambúrguer com tamanho ajustado
            )}
          </button>
        </div>

        {/* Menu Desktop no canto superior direito */}
        <nav className={`hidden lg:flex lg:items-center absolute top-5 right-5 space-x-8 transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0"}`}>
          <ul className="flex space-x-8 antialiased">
            {navigation.map((item, idx) => (
              <li key={idx}>
                {item.path.startsWith("#") ? (
                  <ScrollLink
                    to={item.path.substring(1)}
                    smooth={true}
                    duration={500}
                    className={`text-white text-xl font-semibold hover:text-[#fff] transition-all duration-300 relative ${activeIndex === idx ? "font-bold text-[#fff]" : ""}`}
                    style={{
                      fontFamily: "Coldiac", 
                      textShadow: "0 5px 10px rgba(0, 0, 0, 0.7)",  // Sombra mais forte e maior
                    }}
                    onClick={() => handleClick(idx)}
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white text-xl font-semibold hover:text-[#fff] transition-all duration-300 relative ${activeIndex === idx ? "font-bold text-[#fff]" : ""}`}
                    style={{
                      fontFamily: "Coldiac", 
                      textShadow: "0 5px 10px rgba(0, 0, 0, 0.7)",  // Sombra mais forte e maior
                    }}
                    onClick={() => handleClick(idx)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Mobile (aberto quando o botão for clicado) */}
        {menuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-[#000000a0] flex justify-center items-center"> 
            {/* Fundo semitransparente */}
            <ul className="flex flex-col items-center space-y-6 text-white text-3xl font-semibold">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  {item.path.startsWith("#") ? (
                    <ScrollLink
                      to={item.path.substring(1)}
                      smooth={true}
                      duration={500}
                      className={`hover:text-[#fff] transition-all duration-300 relative ${activeIndex === idx ? "font-bold text-[#fff]" : ""}`}
                      style={{
                        textShadow: "0 5px 10px rgba(0, 0, 0, 0.7)", // Sombra mais forte e maior
                      }}
                      onClick={() => handleClick(idx)}
                    >
                      {item.title}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={item.path}
                      className={`hover:text-[#fff] transition-all duration-300 relative ${activeIndex === idx ? "font-bold text-[#fff]" : ""}`}
                      style={{
                        textShadow: "0 5px 10px rgba(0, 0, 0, 0.7)", // Sombra mais forte e maior
                      }}
                      onClick={() => handleClick(idx)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
