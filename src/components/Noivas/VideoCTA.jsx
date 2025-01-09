"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { useState, useEffect } from 'react';
import { BotaoAgendamento } from "../Buttons/BotaoAgendar"; // Se o Botão de Agendamento não for usado, você pode removê-lo

const ImageCTA = () => {
  const [showContent, setShowContent] = useState(false);
  const [audio] = useState(new Audio('/caminho/para/seu/audio.mp3')); // Adicione o caminho correto para o seu áudio

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      audio.play();
    }, 15000); // 15000ms = 15 segundos

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  // Função de clique para abrir o WhatsApp
  const handleClick = () => {
    const phoneNumber = "5519998917724"; // Substitua pelo seu número de WhatsApp
    const message = "Olá! Vim pelo site e gostaria de agendar um horário 🥰"; // Mensagem pré-definida
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
  };

  return (
    <section
      className="relative py-2 w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      aria-label="Chamada para agendamento de serviços de beleza"
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/videos/video_novo_cortado.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div className="absolute inset-0 bg-black opacity-40" /> {/* Sobreposição preta para melhorar a legibilidade */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
        {showContent && (
          <>
            <div className="mb-4">
              <h2 className="text-5xl md:text-6xl font-heading text-white mb-4">
                Não Perca Tempo, Agende Seu Dia de Noiva!
              </h2>
              {/* Subtítulo */}
              <h3 className="text-xl md:text-2xl font-medium text-white mb-8">
                Aproveite um atendimento personalizado para o seu grande dia.
              </h3>
            </div>

            {/* Botão de agendamento */}
            <button
              aria-label="Clique para agendar serviços de beleza"
              className="bg-[#7b5643] text-white font-bold py-4 px-10 rounded-lg shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#211006] hover:shadow-2xl"
              onClick={handleClick}
            >
              Agende Seu Momento Agora!
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ImageCTA;