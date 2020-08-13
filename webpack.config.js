// webpack.config.js
var webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './app-client.js',
  output: {
    // path: __dirname + '/public/dist',
    path: path.resolve('./public'),
    filename: 'bundle.js'
    // publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
      'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY),
      'process.env.COSMIC_WRITE_KEY': JSON.stringify(process.env.COSMIC_WRITE_KEY)
    }),

    // new HtmlWebpackPlugin({
    //   // injects bundle.js to our new index.html
    //   inject: true,
    //   // copys the content of the existing index.html to the new /build index.html
    //   template:  path.resolve('./public/index.html'),
    // }),
 ]
};
