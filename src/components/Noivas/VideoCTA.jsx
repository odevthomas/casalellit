"use client"; // Indica que este módulo deve ser tratado como cliente

import React from "react";

const CTA = () => {
  // Função para abrir o WhatsApp ao clicar no botão
  const handleClick = () => {
    const phoneNumber = "5519998917724"; // Substitua pelo seu número de WhatsApp
    const message = "Olá! Vim pelo site e gostaria de agendar um horário 🥰"; // Mensagem pré-definida
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
  };

  return (
    <section
      className="relative py-16 w-full h-screen bg-cover bg-center bg-fixed flex items-center"
      style={{
        backgroundImage: 'url("/madrinhas2.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Chamada para agendamento de serviços de beleza"
    >
      {/* Sobreposição de fundo */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10 px-6 sm:px-12">
        {/* Título principal */}
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6 drop-shadow-lg">
                Não Perca Tempo, Agende Seu Dia de Noiva!
        </h3>

        {/* Descrição */}
        <p className="text-lg sm:text-xl lg:text-2xl font-custom text-white mb-6 sm:mb-8 drop-shadow-md">
                         Aproveite um atendimento personalizado para o seu grande dia.

        </p>

        {/* Botão de agendamento */}
        <button
          aria-label="Clique para agendar serviços de beleza"
          className="bg-[#7b5643] text-white font-bold py-4 px-10 rounded-lg shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#211006] hover:shadow-2xl"
          onClick={handleClick}
        >
          Agende Seu Momento Agora!
        </button>
      </div>
    </section>
  );
};

export default CTA;
