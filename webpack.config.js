// webpack.config.js

const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    index: './app/index.js',
  },
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'eval-source-map',
  // devtool: 'cheap-module-source-map',  // production
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map',
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'eval-source-map',
      compress: true,
    })
  ],
  devServer: {
    publicPath: '/',
    compress: true,
    port: 8000
  }
};
