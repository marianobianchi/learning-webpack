const path = require('path');
const webpack = require('webpack');

module.exports = function() {
  return {
    entry: {
      vendor: ['lodash'],
      index: './app/index.js',
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
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
        name: 'vendor'
      })
    ]
  }
}
