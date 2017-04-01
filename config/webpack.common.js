const path = require('path');

module.exports = function() {
  return {
    entry: {
      index: './app/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist/'),
      publicPath: '/',
      sourceMapFilename: '[name].map',
    },
  }
}
