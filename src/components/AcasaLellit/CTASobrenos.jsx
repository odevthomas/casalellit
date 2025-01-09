import React from "react";

const HistoriaETradicao = () => {
  return (
    <section
      className="relative py-20 w-full h-screen bg-cover bg-center bg-fixed flex items-center"
      style={{
        backgroundImage: 'url("/CasaLelit/ambiente-piscina1-casa-lellit-campinas.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Chamada para agendamento de serviços de beleza"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Conteúdo sobre a história */}
      <div className="max-w-6xl mx-auto text-center relative z-10 px-6 md:px-12">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-6 sm:mb-8 tracking-tight leading-tight">
          Bem-vindo à Casa Lellit, onde cada detalhe é pensado para você!
        </h2>

        {/* Descrição */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-custom text-white mb-6 leading-relaxed sm:leading-loose md:leading-normal lg:leading-relaxed">
          Aqui, não oferecemos apenas serviços de beleza – criamos experiências que conectam bem-estar, autoestima e exclusividade. Com mais de 15 anos de dedicação ao universo da beleza, transformamos cada visita em um momento único, celebrando o seu estilo e a sua individualidade.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-custom text-white mb-8 leading-relaxed sm:leading-loose md:leading-normal lg:leading-relaxed">
          Nosso espaço é sofisticado, acolhedor e pensado para que você se sinta verdadeiramente em casa. Contamos com uma equipe apaixonada e produtos de altíssima qualidade para garantir resultados incríveis e que respeitam a sua essência. Na Casa Lellit, você é o centro de tudo.
        </p>

        {/* Botão de ação */}
        <button
          aria-label="Clique para agendar serviços de beleza"
          className="bg-[#7b5643] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#211006] hover:shadow-2xl"
        >
          Venha viver uma experiência de beleza que transforma por dentro e por fora!
        </button>
      </div>
    </section>
  );
};

export default HistoriaETradicao;
