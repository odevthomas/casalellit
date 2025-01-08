"use client";

import React from "react";

const MarqueeSection = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div className="text-center text-gray-900 text-lg">Sem itens para exibir</div>;
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-r bg-[#7b564360] text-gray-900 dark:text-gray-100 py-6">
      <div className="flex whitespace-nowrap animate-marquee-smooth">
        {items.map((item, index) => (
          <span
            key={index}
            className={`mx-6 sm:mx-8 text-xl sm:text-2xl font-light tracking-wide text-[#080808] dark:text-[#eaeaea] uppercase transition duration-500 ease-in-out opacity-80 hover:opacity-100 ${
              item === '"use client"' ? 'bg-yellow-300 text-black px-2 py-1 rounded' : ''
            }`}
            aria-hidden="true"
          >
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`repeat-${index}`}
            className={`mx-6 sm:mx-8 text-xl sm:text-2xl font-light tracking-wide text-[#000] dark:text-[#eaeaea] uppercase transition duration-500 ease-in-out opacity-80 hover:opacity-100 hover:text-[#ff6f61] hover:scale-105 ${
              item === '"use client"' ? 'bg-yellow-300 text-black px-2 py-1 rounded' : ''
            }`}
            aria-hidden="true"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;