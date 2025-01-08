import React, { useState, useEffect } from "react";

const CouponModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponUsed, setCouponUsed] = useState(false);

  const generateCouponCode = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const coupon = `D${day}M${month}A${year}`;
    return coupon;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCouponCode(generateCouponCode());
      setIsOpen(true);
    }, 15000); // 15 segundos

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setCouponUsed(false);
  };

  const handleClaimCoupon = () => {
    if (couponUsed) return;
    setCouponUsed(true);
    const whatsappMessage = `Olá, meu cupom é ${couponCode}`;
    const whatsappUrl = `https://wa.me/5519998917724?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="text-center">
      {isOpen && (
        <div className="hs-overlay fixed top-0 left-0 right-0 bottom-0 z-[80] overflow-x-hidden overflow-y-auto" role="dialog" aria-labelledby="coupon-modal-label">
          <div className="flex items-center justify-center h-full">
            <div className="mt-0 opacity-100 duration-500 transition-all sm:max-w-xs sm:w-full m-3">
              <div className="relative flex flex-col bg-[#7e6657] shadow-lg rounded-xl">
                <div className="absolute top-2 right-2">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-[#4f2909] text-white hover:bg-[#6a5c50] focus:outline-none"
                    onClick={closeModal}
                    aria-label="Fechar"
                  >
                    <span className="sr-only">Fechar</span>
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-4 sm:p-10 text-center">
                  <h3 id="coupon-modal-label" className="mb-2 text-2xl font-bold text-[#ebebeb]">
                    Ganhe seu Cupom de Fim de Ano!
                  </h3>
                  <p className="text-[#ebebeb]">
                    Seu código de cupom é: <strong>{couponCode}</strong>
                  </p>

                  <div className="mt-6 grid gap-y-2">
                    <button
                      type="button"
                      className="py-2.5 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm  text-[#29211c] font-medium rounded-lg border border-[#7e6657] bg-white focus:outline-none"
                      onClick={handleClaimCoupon}
                      disabled={couponUsed}
                    >
                      {couponUsed ? "Cupom já garantido" : "Aproveite já o seu Cupom"}
                    </button>
                    <button
                      type="button"
                      className="py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#7e6657] text-white hover:bg-[#6a5c50] focus:outline-none"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponModal;