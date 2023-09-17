const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { sassLoader } = require('sass-loader');
module.exports = {
  entry:"./src/index.js",
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
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
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'public'),
  //   },
  //   compress: true,
  //   port: 9000,
  // },
};