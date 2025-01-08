"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dados dos serviços
const servicesData = [
  {
    title: "Cortes",
    description: "Transforme-se com cortes que traduzem sua essência e estilo. Nossos especialistas criam o visual perfeito para você, combinando tendências modernas com técnica impecável.",
    images: [
      "/Servicos/cortes/1corte-cabelo-elegante-campinas.webp",
      "/Servicos/cortes/2corte-cabelo-elegante-campinas.webp",
    ],
    whatsappMessage: "Oi, vim pelo site e quero agendar um corte de cabelo ou penteado personalizado.",
  },
  {
    title: "Noivas",
    description: "Porque no seu grande dia, cada detalhe importa. Nossos penteados e maquiagens exclusivos são criados para realçar sua beleza e fazer você se sentir única.",
    images: [
      "/Servicos/ServicoNoivas/noiva1-preparacao-noiva-casamento-casa-lellit.webp",
      "/Servicos/ServicoNoivas/noiva2-preparacao-noiva-casamento-casa-lellit.webp",
      "/Servicos/ServicoNoivas/noiva3-preparacao-noiva-casamento-casa-lellit.webp",
    ],
    whatsappMessage: "Oi, vim pelo site e quero agendar meu penteado e maquiagem de noiva.",
  },
  {
    title: "Maquiagens",
    description: "Maquiagens que contam a sua história. Realce sua beleza com os melhores profissionais de Campinas. Você, ainda mais bela, em seus eventos. ",
    images: [
      "/Servicos/maquiagem/maquiagem1-noiva-casamento-casa-lellit.webp",
      "/Servicos/maquiagem/maquiagem2-noiva-casamento-casa-lellit.webp",
    ],
    whatsappMessage: "Oi, vim pelo site e quero agendar uma maquiagem.",
  },
  {
    title: "Coloração e Mechas",
    description: "Mechas que transformam. Realce a beleza dos seus cabelos com técnicas modernas e personalizadas, realizadas pelos melhores especialistas de Campinas. ",
    images: [
      "/Servicos/coloracao/coloracao1-mechas-pintura-cabelo-profissional-casa-lellit.webp",
      "/Servicos/coloracao/coloracao2-mechas-pintura-cabelo-profissional-casa-lellit.webp",
    ],
    whatsappMessage: "Oi, vim pelo site e quero agendar minha coloração.",
  },
  {
    title: "Penteados",
    description: "Deixe seu evento ainda mais especial com penteados criados para encantar. Técnicas únicas e personalização total para valorizar o seu estilo.",
    images: [
      "/Servicos/penteado/penteado1-noiva-casa-lellit-campinas.webp",
      "/Servicos/penteado/penteado2-noiva-casa-lellit-campinas.webp",
    ],
    whatsappMessage: "Oi, vim pelo site e quero agendar meu penteado especial.",
  },
  {
    title: "Unhas",
    description: "Mãos e pés impecáveis para complementar sua beleza. Nossos serviços de manicure e alongamento revelam o cuidado que você merece.",
    images: [
      "/Servicos/unhas/manicure1-pedicure-noiva-casa-lellit-campinas.webp",
      "/Servicos/unhas/manicure2-pedicure-noiva-casa-lellit-campinas.webp",
    ],
    whatsappMessage: "Oi, vim pelo site e quero agendar minha manicure ou alongamento de unhas.",
  },
];

const ServicesSection = () => {
  const sliderRefs = useRef([]); // Array de referências para cada carrossel

  const handleWhatsAppRedirect = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/5519998917724?text=${encodedMessage}`;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Desligado o autoplay
    arrows: false,
    fade: true,
  };

  const jsonLdData = `{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corte de Cabelo",
    "description": "Corte moderno e personalizado realizado por profissionais especializados para atender suas necessidades de estilo.",
    "serviceType": "Corte de Cabelo",
    "provider": {
      "@type": "Organization",
      "name": "Casa Lellit",
      "url": "https://www.casalellit.com",
      "logo": "https://www.casalellit.com/logo.png",
      "sameAs": "https://www.instagram.com/casalellit"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.casalellit.com/servicos/cortes",
      "priceCurrency": "BRL",
      "price": "100.00",
      "priceValidUntil": "2025-12-31"
    }
  }`;

  return (
    <section id="servicos" className="py-32 bg-gradient-to-r from-[#F9F4E8] to-[#F7F0E1] text-[#4f2909]" aria-labelledby="services-section">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Título e Subtítulo */}
        <motion.h2
          id="gallery-section"
          className="text-4xl font-heading text-[#000000] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Descubra Nossos Serviços Exclusivos para Realçar Sua Beleza
        </motion.h2>
        <p className="mb-10 text-lg font-medium text-[#000000c3]">
          Dos Cortes Modernos aos Penteados Deslumbrantes - Encontre a Perfeição em Cada Detalhe para o Seu Dia Especial
        </p>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-[#ffffff2f] w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Título do serviço */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#4f2909] py-4 text-center">
                {service.title}
              </h3>

              {/* Slider de imagens */}
              <div className="relative">
                <Slider
                  ref={(el) => (sliderRefs.current[index] = el)} // Armazenar a referência do carrossel individualmente
                  {...sliderSettings}
                >
                  {service.images.map((image, idx) => (
                    <div key={idx} className="w-full h-[600px] sm:h-[700px] lg:h-[650px]">
                      <motion.img
                        src={image}
                        alt={`Imagem ilustrativa de ${service.title} - ${idx + 1}`}
                        title={`Imagem de ${service.title} - Slide ${idx + 1}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out"
                      />
                    </div>
                  ))}
                </Slider>
                {/* Botões de navegação */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                  <button
                    className="bg-transparent  text-[#ffffffc9] text-xl  transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#b7b7b7e4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
                    onClick={() => sliderRefs.current[index].slickPrev()}
                    aria-label="Ir para o slide anterior"
                  >
                    &#10094; {/* Left arrow */}
                  </button>
                  <button
                    className="bg-transparent  text-[#ffffffc9] text-xl  transition-transform transform hover:scale-110 hover:border-[#ffffff58] hover:text-[#ffffffe4] focus:outline-none focus:ring-white focus:ring-opacity-50 p-3"
                    onClick={() => sliderRefs.current[index].slickNext()}
                    aria-label="Ir para o próximo slide"
                  >
                    &#10095; {/* Right arrow */}
                  </button>
                </div>
              </div>
              
              {/* Descrição do serviço */}
              <div className="p-6 text-center">
                <p className="text-lg text-[#000000c3] mb-6">{service.description}</p>
                <button
                  onClick={() => handleWhatsAppRedirect(service.whatsappMessage)}
                  className="bg-[#4f2909] text-white py-3 px-8 rounded-md text-lg hover:bg-[#9c6a3c] transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Seu Agendamento Aqui!
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dados Estruturados para SEO */}
      <script type="application/ld+json">
        {jsonLdData}
      </script>
    </section>
  );
};

export default ServicesSection;
