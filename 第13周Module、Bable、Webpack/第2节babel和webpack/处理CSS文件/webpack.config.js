const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            //loader: 'css-loader',
            use: [MiniCssExtractPlugin.loader,'css-loader']  // 从右向左执行loader
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css',

        })
    ]
}