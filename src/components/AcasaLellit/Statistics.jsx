import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Statistics = () => {
  const [counts, setCounts] = useState({
    professionals: 0,
    years: 0,
    clients: 0,
    brides: 0,
  });

  useEffect(() => {
    // Objetos com os valores finais das estatísticas
    const targetValues = {
      professionals: 20, // Número de profissionais no salão
      years: 15, // Anos de experiência da Casa L'Ellit
      clients: 35000, // Clientes atendidos
      brides: 2500, // Noivas atendidas
    };

    // Função para incrementar os números
    const animateNumbers = () => {
      Object.keys(targetValues).forEach((key) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: count,
          }));

          if (count >= targetValues[key]) {
            clearInterval(interval);
          }
        }, 100); // A cada 100ms incrementa o número
      });
    };

    animateNumbers();
  }, []);

  return (
    <section
      className="relative py-10 w-full h-screen bg-cover bg-center bg-fixed flex items-center"
      style={{
        backgroundImage: 'url("/CasaLelit/ambiente-piscina1-casa-lellit-campinas.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Chamada para agendamento de serviços de beleza"
    >
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {[{ label: "Profissionais", value: counts.professionals },
            { label: "Anos de experiência", value: counts.years },
            { label: "Clientes atendidos", value: counts.clients },
            { label: "Noivas atendidas", value: counts.brides },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-12 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2, // Delay progressivo
              }}
            >
              <motion.h3
                className="text-8xl font-heading text-[#ffff] transition-all transform hover:scale-110"
              >
                {stat.value}
              </motion.h3>
              <p className="text-2xl font-custom text-gray-100 mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
