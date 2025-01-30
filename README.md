# Casa L'Ellit - Site Oficial

## Sumário

1. [Visão Geral](#visão-geral)
2. [Configuração do Projeto](#configuração-do-projeto)
3. [Tecnologias](#tecnologias)
4. [Estrutura de Diretórios](#estrutura-de-diretórios)
5. [Scripts Disponíveis](#scripts-disponíveis)
6. [Dependências](#dependências)
7. [Desenvolvimento](#desenvolvimento)
8. [Práticas de Desenvolvimento](#práticas-de-desenvolvimento)
9. [Deploy](#deploy)
10. [Licença](#licença)

## Visão Geral

O site da Casa L'Ellit é uma aplicação web moderna desenvolvida para um salão de beleza localizado em Campinas , São Paulo. O objetivo é fornecer informações sobre serviços, facilitar agendamentos e criar uma presença digital forte.

## Configuração do Projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- npm (v9 ou superior)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/casalellit.git
cd casalellit
```

2. Instale as dependências
```bash
npm install
```

## Tecnologias

- **Frontend**: React 18
- **Estilização**: Tailwind CSS
- **Roteamento**: React Router
- **Animações**: Framer Motion
- **Build**: Vite
- **Tipagem**: TypeScript (configurado)

## Estrutura de Diretórios

```
casalellit/
├── public/                   # Arquivos públicos
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   ├── pages/                # Páginas da aplicação
│   ├── assets/               # Recursos estáticos
│   ├── styles/               # Arquivos de estilo
│   ├── utils/                # Utilitários e helpers
│   ├── context/              # Contextos do React
│   └── routes/               # Configuração de rotas
├── vite.config.js            # Configuração do Vite
├── tailwind.config.js        # Configuração do Tailwind
└── package.json              # Configurações e dependências
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run preview`: Pré-visualiza a build de produção
- `npm run lint`: Executa o linter

## Dependências Principais

### Frontend
- React
- React Router
- Framer Motion
- Tailwind CSS
- Lucide React (ícones)

### Utilitários
- Animate.css
- React Helmet
- EmailJS
- Keen Slider

### Formulários e Interação
- Formspree
- React Cookie Consent

## Desenvolvimento

### Convenções

- Utilize componentes funcionais
- Use hooks do React
- Implemente lazy loading
- Siga princípios de acessibilidade
- Mantenha componentes pequenos e reutilizáveis

### Boas Práticas

- Commits semânticos
- Documentação de código
- Testes unitários
- Revisão de código por pull requests

## Deploy

### Plataformas Recomendadas
- Vercel
- Netlify
- GitHub Pages

### Passos de Deploy
1. Construa o projeto
```bash
npm run build
```

2. Faça o deploy do diretório `dist`

## Configurações de Ambiente

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
VITE_API_URL=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_USER_ID=
```

## Performance e SEO

- Otimização de imagens
- Lazy loading
- Meta tags dinâmicas
- Estrutura semântica HTML5

## Acessibilidade

- Suporte a leitores de tela
- Navegação por teclado
- Cores com contraste adequado
- Atributos ARIA

## Licença

Projeto licenciado sob MIT License.

### Termos Adicionais

- Manter identidade visual da Casa L'Ellit
- Não modificar marca ou logotipo
- Reconhecer direitos de propriedade intelectual

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request


Desenvolvido com ❤️ por [Thomas Eduardo ]
