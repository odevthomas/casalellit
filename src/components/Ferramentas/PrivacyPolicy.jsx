import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botão para abrir o Modal */}
      <button
        onClick={toggleModal}
        className="bg-[#7b6b5f] text-white px-6 py-3 rounded-lg hover:bg-[#7e6657] transition duration-300 ease-in-out shadow-md"
      >
        Ver Política de Privacidade
      </button>

      {/* Modal com Política de Privacidade */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 mx-4 md:mx-0 overflow-y-auto max-h-[90vh]">
            <h1 className="text-3xl font-semibold text-[#7b6b5f] mb-6">
              Política de Privacidade e Uso de Dados
            </h1>

            {/* Seções da Política de Privacidade */}
            {[{
                title: "1. Coleta de Dados Pessoais",
                content: "A Casa L'Ellit coleta informações pessoais, como nome, email e telefone, quando você utiliza nossos serviços ou se inscreve em nossos formulários de contato. Esses dados são utilizados para fornecer uma experiência personalizada, bem como para responder a perguntas ou fornecer ofertas relacionadas aos nossos serviços de beleza."
              },
              {
                title: "2. Uso de Dados",
                content: "As informações fornecidas são usadas apenas para fins de comunicação e serviços relacionados à Casa L'Ellit. Não compartilhamos seus dados pessoais com terceiros sem o seu consentimento prévio, exceto quando exigido por lei ou para realizar a entrega dos serviços contratados."
              },
              {
                title: "3. Armazenamento de Dados",
                content: "Seus dados pessoais são armazenados em servidores seguros e protegidos. Tomamos medidas para garantir que suas informações estejam protegidas contra acessos não autorizados."
              },
              {
                title: "4. Cookies e Tecnologias de Rastreamento",
                content: "Utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação no nosso site e para análises de dados de tráfego. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do nosso site."
              },
              {
                title: "5. Uso de Inteligência Artificial para Mensagens Automáticas",
                content: "Para facilitar a comunicação com nossos clientes, utilizamos inteligência artificial para enviar mensagens automatizadas, como assistente no WhatsApp. Essas mensagens podem ser usadas para fornecer informações sobre nossos serviços, promoções e responder a perguntas frequentes. Sempre que possível, você terá a opção de falar diretamente com um atendente humano."
              },
              {
                title: "6. Seus Direitos",
                content: "Você tem o direito de acessar, corrigir ou excluir seus dados pessoais armazenados por nós. Caso deseje exercer seus direitos, entre em contato conosco através dos canais disponíveis no nosso site."
              },
              {
                title: "7. Alterações na Política de Privacidade",
                content: "A Casa L'Ellit pode atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página, e recomendamos que você a revise regularmente."
              },
              {
                title: "8. Contato",
                content: (
                  <>
                    <strong>Telefone:</strong> +55 19 3365-7011<br />
                    <strong>Email:</strong> contato@casalellit.com.br
                  </>
                )
              }
            ].map((section, index) => (
              <section key={index} className="mb-6">
                {section.title && (
                  <h2 className="text-xl font-semibold text-[#7b6b5f] mb-3">
                    {section.title}
                  </h2>
                )}
                <p className="text-gray-700 text-base sm:text-lg">{section.content}</p>
              </section>
            ))}

            {/* Botão para fechar o modal */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={toggleModal}
                className="bg-[#7b6b5f] text-white px-6 py-3 rounded-lg hover:bg-[#7e6657] transition duration-300 ease-in-out shadow-md"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
