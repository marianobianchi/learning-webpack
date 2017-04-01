const commonConfig = require('./webpack.common.js');
// const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    devtool: 'source-map',
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false,
        sourceMap: 'source-map',
      })
    ]
  })
}
