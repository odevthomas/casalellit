const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CssNano = require('cssnano');
const ImageWebpackLoader = require('image-webpack-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Para extrair CSS em arquivos separados

module.exports = {
  mode: 'production', // Modo de produção para otimizar o build
  entry: './src/index.js', // Ponto de entrada do seu código JS
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js', // Nome do arquivo final com hash para cache busting
    clean: true, // Limpa a pasta de saída antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extrai CSS em arquivos separados
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]', // Nomeia as imagens com hash
            },
          },
          {
            loader: ImageWebpackLoader,
            options: {
              bypassOnDebug: true,
              disable: true, // Desabilita durante o desenvolvimento
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs no build de produção
          },
        },
      }), // Minifica JS
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: CssNano,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Arquivo HTML de entrada
      minify: {
        removeComments: true, // Remove comentários do HTML
        collapseWhitespace: true, // Remove espaços em branco
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Extrai CSS com hash
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }), // Limpa o CSS não utilizado
    }),
  ],
  devtool: 'source-map', // Habilita o source map para depuração
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Define o diretório de conteúdo estático
    compress: true, // Habilita compressão de arquivos no servidor
    port: 9000, // Porta do servidor de desenvolvimento
    hot: true, // Habilita Hot Module Replacement
  },
};