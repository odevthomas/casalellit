import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Importando ícones

const TermsOfUse = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-[#7b6b5f] mb-6">Termos de Uso</h1>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-[#7b6b5f]">1. Aceitação dos Termos</h2>
        <p className="text-gray-700">
          Ao acessar e utilizar os serviços da Casa L'Ellit, você concorda com os termos e condições estabelecidos neste documento. Se você não concorda com algum dos termos, não deve utilizar nossos serviços.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-[#7b6b5f]">2. Modificações nos Termos</h2>
        <p className="text-gray-700">
          A Casa L'Ellit se reserva o direito de modificar estes termos a qualquer momento. As alterações serão publicadas nesta página, e recomendamos que você revise os termos periodicamente.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-[#7b6b5f]">3. Uso dos Serviços</h2>
        <p className="text-gray-700">
          Você se compromete a utilizar nossos serviços de maneira legal e ética, respeitando as leis e regulamentos aplicáveis. É proibido utilizar nossos serviços para fins ilícitos ou que possam causar danos a terceiros.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-[#7b6b5f]">4. Propriedade Intelectual</h2>
        <p className="text-gray-700">
          Todo o conteúdo disponível nos serviços da Casa L'Ellit, incluindo textos, imagens, logotipos e gráficos, é protegido por direitos autorais e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir ou modificar qualquer conteúdo sem autorização prévia.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-[#7b6b5f]">5. Limitação de Responsabilidade</h2>
        <p className="text-gray-700">
          A Casa L'Ellit não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais que possam resultar do uso ou da incapacidade de uso dos nossos serviços. O uso dos serviços é por sua conta e risco.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#7b6b5f]">6. Contato</h2>
        <p className="text-gray-700">
          Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através dos canais disponíveis no nosso site.
        </p>
        <p className="font-semibold text-gray-800">
          <FaPhone className="inline-block mr-2" /> <strong>Telefone:</strong> +55 19 3365-7011
        </p>
        <p className="font-semibold text-gray-800">
          <FaEnvelope className="inline-block mr-2" /> <strong>Email:</strong> contato@casalellit.com.br
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;