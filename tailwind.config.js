// tailwind.config.mjs
import withMT from "@material-tailwind/react/utils/withMT";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = withMT({
  // Arquivos onde o Tailwind CSS irá procurar classes
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Configurações do tema
 theme: {
  extend: {
    colors: {
      'lado-oeste': {
          '50': '#fffbec',
          '100': '#fff6d3',
          '200': '#ffeaa5',
          '300': '#ffd86d',
          '400': '#ffbb32',
          '500': '#ffa40a',
          '600': '#ff8c00',
          '700': '#cc6702',
          '800': '#a14f0b',
          '900': '#82420c',
          '950': '#462004',
        },
        'rose': {
          '50': '#F5C2D9',
          '100': '#F8B4D9',
          '200': '#F28DBE',
          '300': '#ED62A1',
          '400': '#D0006B',
          '500': '#A3005D',
        },
        'gold': {
          '500': '#FFD700',
        },
        'mint': {
          '500': '#A8E6CF',
        },
        'wine': {
          '500': '#8B0000',
        },
        'sky': {
          '500': '#87CEEB',
        },
    },
  },
},
  // Habilita o modo escuro através da classe "dark"
  darkMode: "class",
  // Plugins utilizados no Tailwind CSS
  plugins: [nextui()],
});

export default config;