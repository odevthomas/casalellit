"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/HeaderFooter/Navbar";
import SectionCta from "../components/AcasaLellit/SectionCta";
import GalleryWithMap from "../components/AcasaLellit/GalleryWithMap";
import Footer from "../components/HeaderFooter/Footer";
import ImageCarousel from "../components/AcasaLellit/ImageCarousel";
import SectionServices from "../components/AcasaLellit/SectionServices";
import Statistics from "../components/AcasaLellit/Statistics";
import MarqueeSection from "../components/AcasaLellit/MarqueeSection";
import TestimonialsSection from "../components/AcasaLellit/TestimonialsSection";
import GallerySection from "../components/AcasaLellit/GallerySection";
import WhatsApp from "../components/Buttons/FloatingWhatsApp";
import CookieConsent from "../components/Ferramentas/CookieConsent";
import CTASobrenos from "../components/AcasaLellit/CTASobrenos";
import InstagramFeed from "../components/AcasaLellit/InstagramFeed";

const Home = () => {
  const [loading, setLoading] = useState(true); // Estado de carregamento

  const servicesItems = [
    "Transformação Capilar - Beleza que reflete sua essência",
    "Penteados Elegantes - Para seu dia especial",
    "Design de Sobrancelhas - Realce seu olhar",
    "Pacotes para Noivas - Momentos inesquecíveis",
    "Maquiagem Profissional - Beleza e confiança",
    "Manicure e Pedicure - Cuidados para suas mãos e pés",
  ];

  const spaceItems = [
    "Ambiente Aconchegante - Relaxe em um espaço pensado para você",
    "Decoração Sofisticada - Estilo que encanta",
    "Atendimento Personalizado - Experiência única",
    "Tecnologia de Ponta - Equipamentos modernos",
    "Localização Privilegiada - Acesso fácil e estacionamento",
    "Ambiente Luxuoso - Cada detalhe conta",
  ];

  const momentsItems = [
    "Momentos Incríveis - Capturando sua beleza",
    "Transformações de Beleza - Antes e depois",
    "Penteados Maravilhosos - Brilhe em qualquer ocasião",
    "Noivas Radiantes - O dia mais importante",
    "Decoração Excepcional - Eventos memoráveis",
    "Galeria de Estilos - Inspirações para você",
  ];

  const testimonialsItems = [
    "‘Transformei meu visual e foi incrível!’ – Mariana",
    "‘Melhor salão que já frequentei!’ – Juliana",
    "‘Serviço de ponta e ambiente acolhedor!’ – Fernanda",
    "‘Me senti uma princesa no meu casamento!’ – Carolina",
    "‘Profissionais qualificados e atendimento impecável!’ – Beatriz",
    "‘Tudo perfeito, sem palavras!’ – Camila",
  ];

  // Função para simular carregamento do conteúdo
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          style={{
            backgroundImage: `url('/placeholder-image.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center mt-40">
            <div className="loader">Carregando...</div> {/* Aqui você pode colocar um spinner ou animação */}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="scroll-smooth"
        >
          <Navbar />
          <ImageCarousel />
          <SectionServices />
          <MarqueeSection items={servicesItems} />
          <CTASobrenos />
          <GallerySection />
          <MarqueeSection items={momentsItems} />
          <SectionCta />
          <MarqueeSection items={testimonialsItems} />
          <TestimonialsSection />
          <MarqueeSection items={servicesItems} />
          <Statistics />
          <InstagramFeed />
          <GalleryWithMap />
          <CookieConsent />
          <div className="fixed bottom-5 right-5 z-50">
            <WhatsApp />
          </div>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Home;