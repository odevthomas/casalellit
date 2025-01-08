import React, { useState } from "react";
import PrivacyPolicy from "../Ferramentas/PrivacyPolicy";
import TermsOfUse from "../Ferramentas/TermsOfUse";
import DeveloperInfo from "../Ferramentas/DeveloperInfo";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const [modalContent, setModalContent] = useState(null); // Estado para controlar o conteúdo do modal

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Função para rolar suavemente para o topo
  };

  const toggleModal = (content) => {
    setModalContent(content);
    setIsModalOpen((prev) => !prev); // Alterna a visibilidade do modal de maneira segura
  };

  return (
    <footer className="bg-[#7b5643dc] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl text-[#f4f4f4] font-bold mb-4">Contato</h3>
            <p>
              Telefone: <a href="tel:+551933657011" className="hover:text-[#ffdec4]">19 3365-7011</a>
            </p>
            <p>
              WhatsApp: <a href="https://wa.me/5519998917724" className="hover:text-[#ffdec4]">19 99891-7724</a>
            </p>
            <p>R. Maria Conceição F. de Andrade, 209 - Nova Campinas, Campinas - SP, 13092-190</p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-xl text-[#f4f4f4] font-bold mb-4">Nossos Links Úteis!</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.casamentos.com.br/beleza-noivas/casa-lellit--e106078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-light"
                >
                  Casa Lellit no Casamentos.com.br
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => toggleModal(<PrivacyPolicy />)}
                  className="hover:underline text-gray-light"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => toggleModal(<TermsOfUse />)}
                  className="hover:underline text-gray-light"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => toggleModal(<DeveloperInfo />)}
                  className="hover:underline text-gray-light"
                >
                  Sobre o Desenvolvedor
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl text-[#f4f4f4] font-bold mb-4">Siga-nos</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/casalellit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffdec4] hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/casalellit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffdec4] hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Botão Voltar ao Topo */}
        <div className="mt-10 text-center">
          <button
            onClick={scrollToTop}
            className="bg-[#211006] text-white py-2 px-6 rounded-full hover:bg-[#62554b] transition duration-300"
          >
            Voltar ao Topo
          </button>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-10 text-center text-sm text-[#f4f4f4]">
          <p>&copy; {new Date().getFullYear()} Casa Lellit. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal de Política de Privacidade, Termos de Uso ou Sobre o Desenvolvedor */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {modalContent}
            <button
              onClick={() => toggleModal(null)}
              className="close-modal"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: #444;
          color: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          overflow-y: auto;
          max-height: 80vh;
        }
        .close-modal {
          background-color: #7e6657;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
