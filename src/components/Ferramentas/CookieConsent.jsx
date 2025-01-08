import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar o status do cookie
  const checkCookieConsent = () => {
    const cookieConsent = document.cookie.split("; ").find(row => row.startsWith("cookieConsent="));
    return cookieConsent ? cookieConsent.split("=")[1] : null;
  };

  useEffect(() => {
    const consentStatus = checkCookieConsent();
    if (consentStatus !== "true" && consentStatus !== "false") {
      setIsVisible(true); // Exibir o banner se não houver consentimento
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 30; // 30 dias
    setIsVisible(false); // Ocultar o banner
  };

  const declineCookies = () => {
    document.cookie = "cookieConsent=false; max-age=" + 60 * 60 * 24 * 30; // 30 dias
    setIsVisible(false); // Ocultar o banner
  };

  if (!isVisible) return null; // Não renderiza nada se o banner não for visível

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#7b564384] text-white p-3 z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs sm:text-sm">
          Este site utiliza cookies para melhorar sua experiência. Você aceita o uso de cookies?
        </p>
        <div className="mt-2 sm:mt-0 flex space-x-2">
          <button
            onClick={acceptCookies}
            className="bg-[#000] text-white py-1 px-3 rounded"
          >
            Aceitar
          </button>
          <button
            onClick={declineCookies}
            className="bg-[#fcfcfcdc] text-black py-1 px-3 rounded"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
