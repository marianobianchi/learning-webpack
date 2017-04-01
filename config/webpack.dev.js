
const webpack = require('webpack');
var path = require('path');

module.exports = function (env) {
  return {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      index: './app/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '/../dist/'),
      publicPath: '/',
      sourceMapFilename: '[name].map',
    },
    devServer: {
      publicPath: '/',
      compress: true,
      port: 8000,
      overlay: {
        warnings: true,
        errors: true
      }
    }
  }
};
