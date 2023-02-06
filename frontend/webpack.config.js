const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devtool: "eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html.ejs",
            filename: "./index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        open: '/home'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/home'
    }
}