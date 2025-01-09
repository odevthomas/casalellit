"use client"; // Indica que este módulo deve ser tratado como cliente

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TabelaDeServicos = () => {
  const servicos = {
    coloracao: [
      "Reflexo", "Mechas", "Coloração raiz", "Henna", "Tratamento",
      "Proteção Plex", "Hidratação", "Reconstrução", "Realinhamento Capilar",
      "Mega Hair", "Mega Hair Fita", "Mega Hair Queratina",
    ],
    corte: [
      "Corte", "Corte masculino", "Lavado", "Secagem", "Produção",
    ],
    maquiagem: [
      "Maquiagem", "Escova", "Babyliss", "Penteado",
    ],
    nailDesign: [
      "Alongamento de Unhas", "Esmaltação em gel", "Manutenção de alongamento",
    ],
    peEMao: [
      "Manicure", "Pedicure", "Esmaltação", "Francesinha", "Reflexologia",
    ],
    cilios: [
      "Lash Lifting", "Extensão de Cílios", "Colocação de cílios postiços",
    ],
    sobrancelhas: [
      "Brownlamination", "Nanoblanding", "Design Sobrancelhas", "Tintura Sobrancelha",
    ],
  };

  const titulos = {
    coloracao: "Coloração",
    corte: "Corte",
    maquiagem: "Maquiagem",
    nailDesign: "Nail Design",
    peEMao: "Pé & Mão",
    cilios: "Cílios",
    sobrancelhas: "Sobrancelhas",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="tabela-servicos" className="py-40 bg-gradient-to-r from-[#f6eee3] to-[#f6eee3] text-[#4a4a4a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-5xl font-serif text-[#6d3406] mb-12 tracking-widest">
          Serviços Exclusivos Para Realçar Sua Beleza
        </h3>
        <p className="text-lg font-custom text-black mb-6 sm:text-xl lg:text-2xl">
          Explore nossos tratamentos especializados e descubra como cada serviço pode realçar sua confiança e bem-estar de forma única e personalizada.
        </p>

        <Slider {...settings}>
          {Object.entries(servicos).map(([categoria, lista]) => (
            <div key={categoria} className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out mx-3 my-4 bg-gradient-to-r from-[#f2ebd8] to-[#f7f0e9]">
              <h3 className="text-3xl font-semibold text-[#6d3406] border-b-2 border-[#6d3406] pb-2">
                {titulos[categoria]}
              </h3>
              <ul className="list-none ml-6 space-y-3 text-lg font-medium text-[#4a4a4a]">
                {lista.map((servico, index) => (
                  <li
                    key={index}
                    className="hover:text-[#6d3406] transition-all duration-200 cursor-pointer"
                  >
                    {servico}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
        
        {/* Botão para agendar ou saber mais */}
        <div className="mt-10">
          <a 
            href="/agendar" // Altere o link conforme necessário
            className="inline-block px-8 py-3 bg-[#6d3406] text-white font-semibold rounded-lg shadow-md hover:bg-[#5a2e05] transition duration-300"
          >
            Agende Seu Serviço
          </a>
        </div>
      </div>
    </section>
  );
};

export default TabelaDeServicos;