const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index:'./src/index.js',
   
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',  // [name]能取到entry里的文件名
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};