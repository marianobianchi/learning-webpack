const commonConfig = require('./webpack.common.js');
// const path = require('path');
// const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    devtool: 'inline-source-map',
    output: {
      publicPath: '/',
    },
    devServer: {
      publicPath: '/',
      compress: true,
      port: 8000,
      overlay: {
        warnings: true,
        errors: true
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.base.html'
      }),
    ],
  })
};
