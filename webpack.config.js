const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { sassLoader } = require('sass-loader');
module.exports = {
  entry:"./src/index.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name][contenthash].js',
    clean: true
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/i,
        use: ['style-loader','css-loader','sass-loader'],
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./public/index.html"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9999,
    hot: true,
    historyApiFallback: true
  },
};