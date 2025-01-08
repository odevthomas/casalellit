import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }, []);

  return null; // Esse componente não renderiza nada
};

export default SmoothScroll;
