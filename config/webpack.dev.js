const commonConfig = require('./webpack.common.js');
// const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');


module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      publicPath: '/',
      compress: true,
      port: 8000,
      overlay: {
        warnings: true,
        errors: true
      }
    }
  })
};
