const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
  return {
    entry: {
      index: './app/index.js',
      vendor: ['lodash'],
      styles: './scss/main.scss',
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              //resolve-url-loader may be chained before sass-loader if necessary
              use: ['css-loader', 'sass-loader?sourceMap']
            })
          }
        ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist/'),
      publicPath: '/',
      sourceMapFilename: '[name].map',
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }),
      new ExtractTextPlugin({
        filename: 'styles.bundle.css',
        allChunks: true
      }),
    ]
  }
}
