const commonConfig = require('./webpack.common.js');
// const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    devtool: 'source-map',
    output: {
      publicPath: '/assets/',
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        sourceMap: true,
      }),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'index.base.html'
      }),
    ]
  })
}
