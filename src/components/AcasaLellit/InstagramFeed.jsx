"use client"; // Indica que este módulo deve ser tratado como cliente

import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa'; // Ícone do Instagram
import { Camera, User, MapPin } from 'lucide-react'; // Ícones do Lucide

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false); // Estado para controlar o botão "Seguir"
  const [isFollowingInProgress, setIsFollowingInProgress] = useState(false); // Estado para simular a requisição de seguir
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Substitua 'YOUR_ACCESS_TOKEN' pelo seu token de acesso da API do Instagram
  const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
  const USER_ID = 'YOUR_USER_ID'; // Substitua pelo seu ID de usuário do Instagram

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(`https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`);
        const data = await response.json();
        
        // Filtra apenas as postagens de imagem
        const imagePosts = data.data.filter(post => post.media_type === 'IMAGE').map(post => ({
          id: post.id,
          imageUrl: post.media_url,
          caption: post.caption,
          link: post.permalink,
        }));
        
        setPosts(imagePosts);
      } catch (error) {
        console.error("Erro ao buscar postagens do Instagram:", error);
      } finally {
        setLoading(false); // Após a busca, altera o estado de loading para false
      }
    };

    fetchInstagramPosts();
    
    const intervalId = setInterval(fetchInstagramPosts, 60000); // Atualiza a cada 60 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  // Função simulada para seguir a pessoa
  const handleFollow = () => {
    if (isFollowingInProgress) return; // Impede cliques múltiplos enquanto a requisição não terminar

    setIsFollowingInProgress(true);

    // Simulação de requisição para "seguir" a pessoa (em um backend real, você faria uma requisição API)
    setTimeout(() => {
      setIsFollowing(!isFollowing); // Alterna entre 'Seguir' e 'Seguindo'
      setIsFollowingInProgress(false); // Reabilita o botão após a "requisição" terminar
    }, 1500); // Simula um atraso de 1,5 segundos
  };

  // Tela de loading (spinner)
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-200">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-blue-500" role="status">
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <section id="instagram-feed" className="py-20 bg-[#f6eee3bb] text-[#7b5643c0]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Título da Seção */}
        <h1 className="text-4xl font-extrabold text-[#3a2e22] mb-12">Siga-nos no Instagram</h1>
        
        {/* Cabeçalho do Perfil */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-12">
          <img
            src="/logo.webp" // A foto do perfil
            alt="Perfil Casa L'Ellit"
            className="w-28 h-28 rounded-full border-4 border-[#7d675922] shadow-lg"
          />
          <div className="ml-6 text-left">
            <p className="text-xl font-semibold text-[#3f3f3f] mt-2">
              Beleza e bem-estar 🍃
            </p>

            {/* Endereço com ícone de localização */}
            <p className="text-sm sm:text-base text-gray-600 mt-2 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-600" /> {/* Ícone de Localização */}
              <span className="text-lg">Rua Maria Conceição Franco de Andrade 209, Campinas, São Paulo</span>
            </p>

            <p className="text-sm sm:text-base text-gray-700 mt-2 flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Camera className="w-5 h-5 text-gray-600" /> {/* Ícone de Câmera */}
                <span className="font-medium">1.522 publicações</span>
              </span>
              <span className="flex items-center space-x-1">
                <User className="w-5 h-5 text-gray-600" /> {/* Ícone de Usuário */}
                <span className="font-medium">42 mil seguidores</span>
              </span>
              <span className="flex items-center space-x-1">
                <User className="w-5 h-5 text-gray-600" /> {/* Ícone de Seguindo */}
                <span className="font-medium">6.924 seguindo</span>
              </span>
            </p>

            <div className="mt-6 flex justify-center space-x-6">
              {/* Botão Seguir */}
              <button
                onClick={handleFollow}
                className={`px-8 py-3 rounded-lg text-white font-semibold text-sm transition-colors ${isFollowing ? 'bg-gray-400' : 'bg-[#7d6759] hover:bg-[#5b4237]'} ${isFollowingInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isFollowingInProgress} // Desabilita o botão enquanto está em processo
              >
                {isFollowingInProgress ? 'Seguindo...' : isFollowing ? 'Seguindo' : 'Seguir'}
              </button>

              {/* Botão Visitar Instagram */}
              <a
                href="https://www.instagram.com/casalellit/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg text-white font-semibold text-sm bg-[#2d2828bc] hover:bg-[#7d6759] transition-colors flex items-center"
              >
                Visitar
                <FaInstagram className="inline ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Galeria de Postagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-300 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Link para abrir o post diretamente no Instagram */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs sm:text-sm font-light"
                >
                  Ver no Instagram
                </a>
              </div>
              <div className="absolute bottom-0 left-0 bg-[#7b5643f1] text-white p-5 text-sm sm:text-md w-full">
                <p className="font-semibold text-lg">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;