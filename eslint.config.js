import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignora a pasta 'dist' durante a verificação
  { ignores: ['dist'] },
  
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Define a versão do ECMAScript
      globals: globals.browser, // Define os globais do navegador
      parserOptions: {
        ecmaVersion: 'latest', // Utiliza a versão mais recente do ECMAScript
        ecmaFeatures: { jsx: true }, // Habilita o suporte a JSX
        sourceType: 'module', // Define o tipo de módulo como ES6
      },
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React
      },
    },
    plugins: {
      react, // Plugin para regras do React
      'react-hooks': reactHooks, // Plugin para regras de Hooks do React
      'react-refresh': reactRefresh, // Plugin para suporte ao React Fast Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Regras recomendadas do ESLint
      ...react.configs.recommended.rules, // Regras recomendadas do ESLint para React
      ...react.configs['jsx-runtime'].rules, // Regras para o JSX Runtime
      ...reactHooks.configs.recommended.rules, // Regras recomendadas para React Hooks
      'react/jsx-no-target-blank': 'off', // Desativa a regra para evitar o uso de _blank
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportações constantes
      ],
    },
  },
];