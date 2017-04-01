
const webpack = require('webpack');
var path = require('path');

module.exports = function (env) {
  return {
    entry: {
      index: './app/index.js',
    },
    devtool: 'source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, '/../dist/'),
      publicPath: '/',
      sourceMapFilename: '[name].map'
    },
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
  }
}
