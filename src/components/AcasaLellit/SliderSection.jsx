import React, { useState, useEffect, useRef } from 'react';

// Componente LazyImage
const LazyImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // IntersectionObserver para Lazy Load
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      data-src={src}
      alt={alt}
      className={`w-full h-auto object-cover transition-opacity duration-500 ${isVisible && isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={handleImageLoad}
      src={isVisible ? src : undefined}
    />
  );
};

// Componente principal que gerencia o Carregamento da Página
const PageWithLazyLoad = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Simulando o carregamento da página
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000); // Delay reduzido para 1 segundo
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isPageLoaded ? (
        <LoadingScreen />
      ) : (
        <div className="relative w-full overflow-hidden bg-[#f6eee3bb] transition-opacity duration-700 ease-in">
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-center text-[#4f2909] mb-6">
              Bem-vindo à nossa página
            </h2>
            {/* Imagem utilizando toda a largura da página */}
            <LazyImage
              src="/path/to/image.jpg"
              alt="Imagem de exemplo"
              className="w-full h-[500px] sm:h-[600px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-lg text-[#7a7a7a] text-center">
              Explore nossos serviços incríveis e saiba mais sobre nós!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageWithLazyLoad;
