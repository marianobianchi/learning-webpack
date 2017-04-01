const path = require('path');
const webpack = require('webpack');

module.exports = function() {
  return {
    entry: {
      index: './app/index.js',
      vendor: ['lodash'],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist/'),
      publicPath: '/',
      sourceMapFilename: '[name].map',
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
      })
    ]
  }
}
