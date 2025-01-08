

# README - Casa L’Ellit - Site Oficial

Este é o repositório do site oficial da **Casa L’Ellit**, um salão de beleza especializado em tratamentos de estética e cuidados com o cabelo, localizado em **Cambuci, São Paulo**. A Casa L’Ellit oferece uma gama de serviços personalizados, incluindo atendimento para **noivas**, **formaturas**, **mechas**, **coloração de cabelo**, **design de sobrancelhas**, e **cuidados com a pele**. Este site tem como objetivo fornecer aos visitantes uma experiência única ao destacar os serviços oferecidos e a história da Casa L’Ellit.

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Como Rodar o Projeto](#como-rodar-o-projeto)
5. [Funcionalidades do Site](#funcionalidades-do-site)
6. [SEO e Performance](#seo-e-performance)
7. [Acessibilidade](#acessibilidade)
8. [Links e Redirecionamentos](#links-e-redirecionamentos)
9. [Contribuindo](#contribuindo)
10. [Licença](#licença)

---

## Visão Geral

O site da **Casa L’Ellit** foi desenvolvido com o objetivo de proporcionar uma navegação agradável e intuitiva para os usuários, oferecendo todas as informações sobre os serviços e detalhes da empresa. O projeto conta com as melhores práticas de SEO, performance e acessibilidade.

Entre as principais funcionalidades, o site oferece:

- **Exibição de informações detalhadas sobre os serviços oferecidos**;
- **Formulário de contato** com integração ao WhatsApp;
- **Integração com redes sociais** como Facebook, Instagram, e Twitter;
- **SEO Otimizado** para garantir que o site seja facilmente encontrado nos motores de busca;
- **Estilos modernos e responsivos** para uma experiência visual atraente em qualquer dispositivo.

---

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5**: Para a estrutura do conteúdo.
- **CSS3**: Para o design e estilização do layout. Utilização de *flexbox* e *grid* para garantir responsividade.
- **JavaScript**: Para interatividade e funcionalidades dinâmicas, incluindo automação de títulos e integração com o Google Analytics.
- **React**: Utilizado na construção da aplicação frontend (arquivo principal `src/main.jsx`).
- **AOS (Animate on Scroll)**: Para a animação de elementos ao serem visualizados pelo usuário.
- **Google Tag Manager e Google Analytics**: Para acompanhamento de métricas e comportamentos dos usuários no site.
- **Open Graph e Twitter Cards**: Para otimização de compartilhamento nas redes sociais.
- **Fontes Google**: Uso de fontes `Merriweather` e `Poppins` para garantir uma tipografia moderna e legível.
- **Lazy Loading**: Implementado para otimizar o carregamento de imagens.
- **Schema.org (JSON-LD)**: Utilizado para melhorar a visibilidade nos motores de busca e enriquecer os resultados do Google com dados estruturados.

---

## Estrutura do Projeto

O site está estruturado de forma modular, com os arquivos principais organizados em diferentes seções. A estrutura de diretórios é a seguinte:

```
/casalellit/
│
├── /public/                  # Arquivos públicos (ex: imagens, favicon)
│   ├── casalellit.jpg         # Logo e imagem de destaque
│   └── favicon-branco.svg     # Favicon para modo escuro
│
├── /src/                     # Arquivos de código-fonte
│   ├── /styles/              # Arquivos de estilo CSS
│   │   ├── index.css         # Estilos gerais
│   │   └── App.css           # Estilos específicos para o app React
│   ├── /components/          # Componentes React
│   └── main.jsx              # Arquivo principal de entrada
│
├── index.html                # Página HTML principal
└── README.md                 # Este arquivo
```

- **/public**: Contém todos os arquivos que são acessados diretamente pelo navegador, como imagens e o favicon.
- **/src**: Contém os arquivos de código-fonte. A maior parte da lógica do site é armazenada aqui, incluindo os componentes React e arquivos de estilo.

---

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/casalellit.git
```

### 2. Instalar as dependências

Acesse o diretório do projeto e instale as dependências:

```bash
cd casalellit
npm install
```

### 3. Rodar o servidor de desenvolvimento

Inicie o servidor local com:

```bash
npm start
```

Isso abrirá o site no seu navegador localmente (normalmente em `http://localhost:3000`).

---

## Funcionalidades do Site

### 1. **Página Inicial (Home)**

A página inicial contém as informações principais sobre a Casa L’Ellit, incluindo:

- **Imagem de destaque** com o logo da empresa;
- **Botão de WhatsApp** para facilitar o contato imediato;
- **Links para redes sociais** da Casa L’Ellit;
- **Menu de navegação** com seções principais.

### 2. **Automação de Título da Página**

O título da página é alterado dinamicamente a cada 3 segundos para melhorar a visibilidade nos motores de busca, alternando entre várias palavras-chave de interesse como “Noivas”, “Formaturas”, “Cuidados com a Pele”, etc.

### 3. **Formulário de Contato**

Há um formulário de contato simples integrado ao WhatsApp, permitindo que os usuários se comuniquem diretamente com a equipe do salão para agendamentos ou dúvidas.

### 4. **SEO Otimizado**

O site foi desenvolvido com SEO em mente, utilizando meta tags, título dinâmico, e dados estruturados através de **Schema.org** para aumentar a visibilidade nos motores de busca.

### 5. **Animações de Rolagem**

Com a integração do **AOS**, o site possui animações que são ativadas conforme o usuário rola a página. Isso proporciona uma experiência visual mais fluida e envolvente.

### 6. **Design Responsivo**

O layout é adaptável, oferecendo uma excelente experiência em dispositivos móveis e desktop. A navegação é otimizada para facilitar a interação com o conteúdo, independentemente do dispositivo.

---

## SEO e Performance

### 1. **SEO**

- O site possui uma descrição clara e palavras-chave relevantes nas meta tags.
- As **Open Graph Tags** e **Twitter Cards** são configuradas corretamente para garantir que as imagens e descrições apareçam de forma atrativa ao serem compartilhadas.
- O uso de **Schema.org** ajuda a melhorar a indexação e exibição nos resultados de pesquisa, incluindo informações como o nome da empresa, endereço, telefone, e links para redes sociais.

### 2. **Performance**

- **Lazy Loading** foi implementado para garantir que imagens e conteúdo sejam carregados apenas quando necessário, melhorando o tempo de carregamento.
- O site utiliza **CSS crítico** inline para garantir que o layout e os estilos principais sejam carregados rapidamente, minimizando o tempo de espera.

---

## Acessibilidade

O site foi desenvolvido com acessibilidade em mente, seguindo boas práticas para garantir que seja utilizável por todos, incluindo pessoas com deficiência:

- Uso de **atributos ARIA** para melhorar a navegação de leitores de tela;
- **Contrast ratio** otimizado entre o fundo e o texto para garantir legibilidade;
- **Teclado navegável** para garantir que os usuários possam interagir com o conteúdo sem depender do mouse.

---

## Links e Redirecionamentos

- **Redirecionamentos SEO-friendly**: URLs amigáveis com palavras-chave relevantes.
- **Links de contato**: Botões de WhatsApp, e links diretos para redes sociais, garantindo facilidade de contato.

---

## Contribuindo

Este projeto é de código aberto! Se você deseja contribuir, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Envie a branch para o repositório remoto (`git push origin feature/nome-da-feature`).
5. Abra um pull request!

---

## Licença

Este projeto está licenciado sob a **MIT License**. Contudo, caso você utilize este projeto como base para um site comercial, será necessário cumprir com as cláusulas adicionais descritas a seguir:

### 1. Uso Permitido:
- A licença permite o uso do site para fins comerciais, desde que a marca da Casa L’Ellit seja mantida e a marca registrada não seja alterada.
  
### 2. Proibições:
- Não é permitido modificar o design ou funcionalidade do site de uma forma que prejudique a imagem da Casa L’Ellit.
  
### 3. Direitos de Propriedade Intelectual:
- Todos os direitos sobre o design, logotipo e conteúdo de marca pertencem à Casa L’Ellit.

--- 

## Considerações Finais

A Casa L’Ellit está comprometida em oferecer um site de alta qualidade para seus clientes e em proporcionar uma experiência de navegação impecável. Com foco em beleza, estética e atendimento personalizado, o site reflete a missão da Casa L’Ellit em transformar e realçar a beleza natural de seus clientes. 
