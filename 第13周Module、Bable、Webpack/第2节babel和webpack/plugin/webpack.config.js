const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index:'./src/index.js',
    search: './src/search.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',  // [name]能取到entry里的文件名
  },

  plugins: [
    // 单入口
      // new HtmlWebpackPlugin ({
      //     template: './index.html'
      // })
    
    // 多入口
    new HtmlWebpackPlugin({
      template: './index.html',
      filename:'index.html',
      // 指定模版需要引入的js文件
      chunks:['index'],
      minify: {
        // 删除index.html中的注释
        removeComments: true,
        //删除index.html中的空格
        collapseWhitespace:true,
        //删除各种html标签属性值的双引号
        removeAttributeQuotes:true
      }
    }),
    new HtmlWebpackPlugin({
      template: './search.html',
      filename:'search.html',
      chunks:['search']
    }),
  ]
}