import React, { useState } from 'react'; // Importando useState
import Footer from '../components/HeaderFooter/Footer';
import NoivasGaleria from '../components/Noivas/NoivasGaleria';
import Navbar from '../components/HeaderFooter/Navbar';
import TabelaDeServicos from '../components/Noivas/TabelaDeServicos';
import DiaDaNoivaSection from '../components/Noivas/DiaDaNoivaSection';
import NoivaSection from '../components/Noivas/NoivaSection';
import MarqueeSection from '../components/AcasaLellit/MarqueeSection';
import WhatsApp from "../components/Buttons/FloatingWhatsApp";
import VideoCTA from "../components/Noivas/VideoCTA";
import ImageCTA from "../components/Noivas/ImageCTA";
import DepoimentosSection from '../components/Noivas/DepoimentosSection'; // Importando corretamente o componente

const Noivas = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Itens para serviços de noivas
  const servicesItems = [
    "Transformação Capilar - A beleza que reflete sua essência",
    "Penteados Elegantes - Para o seu grande dia",
    "Design de Sobrancelhas - Realce seu olhar",
    "Pacotes para Noivas - Momentos inesquecíveis no seu casamento",
    "Maquiagem Profissional - Beleza e confiança para todas as ocasiões",
    "Manicure e Pedicure - Cuidados completos para suas mãos e pés",
  ];

  // Itens sobre o ambiente e espaço
  const spaceItems = [
    "Ambiente Aconchegante - Relaxe em um espaço pensado para você",
    "Decoração Sofisticada - Estilo que encanta e acolhe",
    "Atendimento Personalizado - Experiência única e acolhedora",
    "Tecnologia de Ponta - Equipamentos modernos para o melhor cuidado",
    "Localização Privilegiada - Fácil acesso com estacionamento amplo",
    "Ambiente Luxuoso - Cada detalhe pensado para o seu bem-estar",
  ];

  // Itens sobre momentos especiais e serviços para noivas
  const momentsItems = [
    "Momentos Incríveis - Capturando sua beleza e estilo",
    "Transformações de Beleza - Antes e depois impressionantes",
    "Penteados Maravilhosos - Para brilhar em qualquer ocasião",
    "Noivas Radiantes - O dia mais importante da sua vida",
    "Decoração Excepcional - Cada evento merece o melhor",
    "Galeria de Estilos - Inspirações para todas as ocasiões",
  ];

  // Itens para depoimentos (corrigido)
  const depoimentosItems = [
    "A Casa Casalellit proporcionou um dia inesquecível. Me senti linda e cuidada do começo ao fim.",
    "Equipe super profissional, com atenção a cada detalhe. Meu grande dia foi perfeito graças a eles.",
    "Sem palavras! A experiência foi maravilhosa, não poderia ter escolhido um lugar melhor para me preparar para o meu casamento.",
  ];

  return (
    <>
      <Navbar />
      <NoivaSection /> {/* Exibindo a seção da noiva */}
      <DiaDaNoivaSection />
      <NoivasGaleria />
      <MarqueeSection items={momentsItems} />
      <VideoCTA />
      <MarqueeSection items={momentsItems} />
            <TabelaDeServicos />
      <MarqueeSection items={servicesItems} />
<ImageCTA/>
      <DepoimentosSection items={depoimentosItems} /> {/* Corrigido para 'depoimentosItems' */}
      <div className="fixed bottom-5 right-5 z-50">
        <WhatsApp />
      </div>

      <Footer />
    </>
  );
};

export default Noivas;
