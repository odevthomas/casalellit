"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const GalleryWithMap = () => {
  const [showHours, setShowHours] = useState(false);

  const images = [
    "/CasaLelit/casa-lellit-campinas.webp",
    "/CasaLelit/ambinete-interno-casa-lellit-campinas.webp",
    "/CasaLelit/ambiente-piscina1-casa-lellit-campinas.webp",
    "/CasaLelit/ambiente-noivas-casa-lellit-campinas.webp",
    "/CasaLelit/ambiente-piscina2-casa-lellit-campinas.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const hours = {
    quarta: "09:00–20:00",
    quinta: "09:00–20:00",
    sexta: "09:00–20:00",
    sábado: "09:00–20:00",
    domingo: "Fechado",
    segunda: "Fechado",
    terça: "09:00–20:00",
  };

  const isOpenNow = () => {
    const now = new Date();
    const day = now.toLocaleString("pt-BR", { weekday: "long" }).toLowerCase();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const dayHours = hours[day];

    if (!dayHours || dayHours === "Fechado") {
      return false;
    }

    const [open, close] = dayHours.split("–").map(h => h.trim());
    const [openHour, openMinute] = open.split(":").map(Number);
    const [closeHour, closeMinute] = close.split(":").map(Number);

    return (
      (hour > openHour || (hour === openHour && minute >= openMinute)) &&
      (hour < closeHour || (hour === closeHour && minute < closeMinute))
    );
  };

  return (
    <section id="espaco" className="text-gray-800 body-font relative">
      <div className="absolute inset-0 bg-[#f6eee3bb]">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=R.%20Maria%20Concei%C3%A7%C3%A3o%20F.%20de%20Andrade,%20209%20-%20Nova%20Campinas,%20Campinas%20-%20SP,%2013092-190&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-col relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="px-2">
                  <motion.img
                    src={src}
                    alt={`Descrição da imagem ${index + 1}`}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="md:w-1/2 bg-[#f6eee3bb] rounded-lg p-8 shadow-md flex flex-col justify-between">
            <h2 className="text-black text-xl mb-1 font-medium title-font">Conheça Nosso Espaço</h2>
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 mr-2 text-secondary-color" />
              <span className="text-lg">R. Maria Conceição F. de Andrade, 209 - Nova Campinas, Campinas - SP, 13092-190</span>
            </div>
            <button
              onClick={() => setShowHours(!showHours)}
              className="mb-4 text-secondary-color hover:text-gray-dark transition duration-300 text-lg"
            >
              {showHours ? "Ocultar Horários" : "Mostrar Horários"}
            </button>
            {showHours && (
              <div className="bg-background-light p-4 rounded-lg shadow-sm">
                {Object.entries(hours).map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between my-2">
                    <span className="mr-2 capitalize text-lg">{day}:</span>
                    <span className={`font-medium text-lg ${time === "Fechado" ? "text-red-600" : "text-gray-dark"}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center">
              {/* Botão de Ver Trajeto - Melhorado */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R.%20Maria%20Concei%C3%A7%C3%A3o%20F.%20de%20Andrade,%20209%20-%20Nova%20Campinas,%20Campinas%20-%20SP,%2013092-190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4f2909] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#3e230d74] transition duration-300 transform hover:scale-105 text-lg"
              >
                Ver Trajeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryWithMap;