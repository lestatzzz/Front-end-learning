const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //loader: 'css-loader',
                use: [{
                    loader:MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },'css-loader']  // 从右向左执行loader
            },
            {
                test:/\.(jpg|png|gif)$/,
                type: 'asset/resource'
            },
            {
                test:/\.html$/,
                loader:'html-withimg-loader',
            }
        ]
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