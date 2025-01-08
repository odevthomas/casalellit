const purify = require("purify-css");
const path = require("path");

// Defina os caminhos para seus arquivos HTML e CSS
const htmlPaths = [
  path.join(__dirname, "src/**/*.html"), // Caminho para seus arquivos HTML
  path.join(__dirname, "src/**/*.js"),   // Caminho para seus arquivos JS (se houver)
];
const cssPaths = [path.join(__dirname, "src/styles/**/*.css")]; // Caminho para seus arquivos CSS

// Execute a purificação
purify(htmlPaths, cssPaths, {
  minify: true,  // Minifica o CSS resultante
}).then((purifiedCss) => {
  // Salve o CSS purificado em um arquivo
  const fs = require("fs");
  fs.writeFileSync(path.join(__dirname, "dist/styles/purified.css"), purifiedCss);
});
