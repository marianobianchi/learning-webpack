const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
  return {
    entry: {
      vendor: ['lodash'],
      index: './app/index.js',
    },
    module: {
        rules: [
          { // regular css files
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              use: 'css-loader?importLoaders=1',
            }),
          },
          { // sass / scss loader for webpack
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract([
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              }
            ]),
          }
        ]
    },
    output: {
      filename: 'assets/[name].[chunkhash].js',
      path: path.resolve(__dirname, '../dist/'),
      sourceMapFilename: 'assets/[name].[chunkhash].map',
    },
    plugins: [
      new ExtractTextPlugin({ // define where to save the file
        filename: 'styles/main.[contenthash].css',
        allChunks: true,
      }),
      new webpack.optimize.CommonsChunkPlugin(
        {
          name: 'vendor',
          filename: 'assets/vendor.[chunkhash].js',
        }
      ),
    ]
  }
}
