// webpack.config.js

const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    index: './app/index.js',
  },
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].map',
  },
};
