import React from 'react';

const BotaoAgendamento = () => {
    return (
        <div className="mt-4 text-center sm:text-left">
            <a
                href="https://api.whatsapp.com/send/?phone=5519998917724&text=Olá!+Vim+pelo+site+e+gostaria+de+agendar+um+horário+🥰&type=phone_number&app_absent=0"
               className="bg-[#5f3717] text-white hover:bg-[#ffd1accf] hover:text-black font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
                Reserve seu Dia de Noiva Agora!
            </a>
        </div>
    );
};

const BotaoDuvidas = () => {
    return (
        <div className="mt-4 text-center sm:text-left">
            <a
                href="https://api.whatsapp.com/send/?phone=5519998917724&text=Olá!+Vim+pelo+site+e+estou+com+dúvida+em+alguns+serviços!+Pode+me+ajudar?&type=phone_number&app_absent=0"
                className="bg-[#5f3717] text-white hover:bg-[#7a4821] font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-colors duration-300 text-sm sm:text-base"
            >
                Dúvidas
            </a>
        </div>
    );
};

const BotaoPromocoes = () => {
    return (
        <div className="mt-4 text-center sm:text-left">
            <a
                href="https://api.whatsapp.com/send/?phone=5519998917724&text=Olá!+Vim+pelo+site+e+gostaria+de+saber+se+vocês+possuem+promoções+ativas+no+momento!&type=phone_number&app_absent=0"
                className="bg-[#5f3717] text-white hover:bg-[#7a4821] font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-colors duration-300 text-sm sm:text-base"
            >
                Promoções
            </a>
        </div>
    );
};

const BotaoLellit = () => {
    return (
        <div className="mt-4 text-center sm:text-left">
            <a
                href="https://api.whatsapp.com/send/?phone=5519998917724&text=Olá!+Vim+pelo+site+e+gostaria+de+saber+mais+sobre+a+Casa+L%27Ellit!&type=phone_number&app_absent=0"
                className="bg-[#5f3717] text-white hover:bg-[#7a4821] font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-colors duration-300 text-sm sm:text-base"
            >
                Saber mais sobre a Casa L'Ellit!
            </a>
        </div>
    );
};

// Exporte os componentes corretamente
export { BotaoAgendamento, BotaoDuvidas, BotaoPromocoes, BotaoLellit };
