import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaSearch } from "react-icons/fa";

const DeveloperInfo = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-[#000] text-gray-200">
      {/* Header com Logo e Campo de Busca */}
      <div className="flex justify-between items-center p-6">
        <img src="/logo-dev.png" alt="Logo" className="h-12" />
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Buscar..."
            className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="text-gray-400" />
        </div>
      </div>

      {/* Informações sobre o desenvolvedor */}
      <div className="max-w-2xl mx-auto p-6 mt-4">
        <h1 className="text-3xl font-bold text-gray-200">Sobre o Desenvolvedor</h1>
        <p className="text-gray-400 mt-2 mb-4">
          Este site foi criado por <strong>Thomas Eduardo R Nascimento</strong>, um desenvolvedor frontend comprometido em criar soluções digitais que aliam design e funcionalidade.
        </p>

        <p className="text-gray-400 mb-4">
          Você pode conferir o meu portfólio online: 
          <a
            href="https://devthm.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center mt-2"
          >
            devthm.site
          </a>
        </p>

        <p className="text-gray-400 mb-4">
          Caso queira entrar em contato, fique à vontade para enviar um e-mail: 
          <a href="mailto:developer.thomas@outlook.com" className="text-blue-400 hover:underline flex items-center mt-2">
            <FaEnvelope className="mr-2" /> developer.thomas@outlook.com
          </a>
        </p>

        <p className="text-gray-400 mb-2">Você também pode me encontrar nas redes sociais:</p>
        <ul className="space-y-2 mb-4">
          <li>
            <a
              href="https://www.linkedin.com/in/devthm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/devthmedu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_devthm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </li>
        </ul>

        <p className="text-gray-400 mb-4">
          <FaPhone className="inline-block mr-2" /> WhatsApp: 
          <a href="https://wa.me/19999042072" className="text-blue-400 hover:underline"> 19999042072</a>
        </p>

        <p className="text-gray-400">Atualmente em: São Paulo</p>
      </div>
    </div>
  );
};

export default DeveloperInfo;
