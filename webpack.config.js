const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const config = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dreamcrafter-3rd-anniversary/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'resolve-url-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:data-src'],
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new StyleExtHtmlWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 8080
  },
};

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  };
}

module.exports = config;
