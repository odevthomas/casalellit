import React from 'react';
import { motion } from 'framer-motion';

// Estilos adicionais em linha para o componente
const styles = {
  container: {
    backgroundColor: '#f4f4f9',
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2d2d2d',
    marginTop: '20px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '15px',
    textAlign: 'justify',
  },
  listItem: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
    paddingLeft: '20px',
    listStyleType: 'circle',
  },
  contactInfo: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  contactTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
  },
  contactDetails: {
    fontSize: '1rem',
    color: '#555',
  },
};

const LicensePage = () => {
  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 style={styles.header}>Licença de Uso - Casa L’Ellit</h1>

      <section>
        <h2 style={styles.sectionTitle}>1. Introdução</h2>
        <p style={styles.paragraph}>
          Ao acessar ou utilizar os serviços oferecidos no site da Casa L’Ellit, você (doravante denominado "Cliente") concorda com os termos e condições descritos nesta licença de uso. Esta licença rege o acesso, uso e distribuição de conteúdo, serviços e materiais oferecidos por meio deste site.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>2. Licença Concedida</h2>
        <p style={styles.paragraph}>
          A Casa L’Ellit concede ao Cliente uma licença limitada, não exclusiva, intransferível e revogável para acessar e utilizar o site e seus conteúdos, incluindo, mas não se limitando a, imagens, textos, vídeos, logotipos e outros materiais (doravante denominados "Conteúdo"), de acordo com as condições estabelecidas nesta licença.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>3. Uso Permitido</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li style={styles.listItem}>Visualização e navegação do conteúdo para fins pessoais e informativos.</li>
          <li style={styles.listItem}>Agendamento de serviços de beleza oferecidos pela Casa L’Ellit.</li>
          <li style={styles.listItem}>Comunicação com a equipe do salão para agendamentos ou outras consultas através do WhatsApp ou outros canais oferecidos.</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>4. Proibições</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li style={styles.listItem}>Utilizar qualquer conteúdo do site para fins comerciais sem a permissão explícita da Casa L’Ellit.</li>
          <li style={styles.listItem}>Reproduzir, distribuir, modificar, criar trabalhos derivados ou decompilar o conteúdo sem a autorização expressa da Casa L’Ellit.</li>
          <li style={styles.listItem}>Usar o conteúdo para fins fraudulentos, prejudiciais, ou que infrinjam os direitos de propriedade intelectual da Casa L’Ellit ou de terceiros.</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>5. Propriedade Intelectual</h2>
        <p style={styles.paragraph}>
          Todos os direitos de propriedade intelectual relacionados ao site e ao conteúdo fornecido são de propriedade da Casa L’Ellit ou de seus licenciantes. Nenhum direito de propriedade sobre o conteúdo do site é concedido ao Cliente, exceto pelo direito de usar o conteúdo conforme especificado nesta licença.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>6. Alterações ao Conteúdo</h2>
        <p style={styles.paragraph}>
          A Casa L’Ellit se reserva o direito de modificar, alterar ou descontinuar qualquer parte do conteúdo, recursos ou serviços oferecidos através do site, sem aviso prévio. O Cliente concorda que não terá direito a compensações por tais alterações.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>7. Responsabilidade</h2>
        <p style={styles.paragraph}>
          A Casa L’Ellit não será responsável por qualquer dano direto, indireto, incidental, consequencial, punitivo ou especial decorrente do uso ou da incapacidade de uso do site ou do conteúdo, mesmo que a Casa L’Ellit tenha sido avisada sobre a possibilidade de tais danos.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>8. Privacidade e Dados Pessoais</h2>
        <p style={styles.paragraph}>
          A utilização do site está sujeita à nossa Política de Privacidade, que descreve como coletamos, utilizamos e protegemos os dados pessoais dos Clientes.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>9. Rescisão</h2>
        <p style={styles.paragraph}>
          A Casa L’Ellit pode, a seu exclusivo critério, suspender ou encerrar a licença concedida ao Cliente em caso de violação dos termos desta licença. Em caso de rescisão, o Cliente deverá interromper imediatamente o uso do site e destruir qualquer material obtido a partir do site.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>10. Limitação de Garantias</h2>
        <p style={styles.paragraph}>
          O site e seu conteúdo são fornecidos "como estão" e "conforme a disponibilidade". A Casa L’Ellit não garante que o site estará livre de erros ou interrupções, nem que o uso do site será contínuo ou ininterrupto.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>11. Modificações da Licença</h2>
        <p style={styles.paragraph}>
          A Casa L’Ellit se reserva o direito de alterar os termos desta licença a qualquer momento. Qualquer modificação será publicada nesta página. O uso contínuo do site após qualquer alteração constitui aceitação das modificações.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>12. Legislação Aplicável e Jurisdição</h2>
        <p style={styles.paragraph}>
          Esta licença será regida e interpretada de acordo com as leis do Brasil. Qualquer disputa relacionada ao uso deste site será resolvida no foro da cidade de São Paulo, estado de São Paulo.
        </p>
      </section>

      <section style={styles.contactInfo}>
        <h2 style={styles.contactTitle}>13. Contato</h2>
        <p style={styles.contactDetails}>
          Caso tenha dúvidas ou deseje mais informações sobre esta licença, entre em contato conosco através dos seguintes meios:
        </p>
        <ul style={{ paddingLeft: '20px' }}>
          <li style={styles.listItem}>E-mail: <a href="mailto:contato@casalellit.com.br">contato@casalellit.com.br</a></li>
          <li style={styles.listItem}>Telefone: +55 19 3365-7011</li>
          <li style={styles.listItem}>WhatsApp: +55 19 99891-7724</li>
        </ul>
      </section>
    </motion.div>
  );
};

export default LicensePage;
