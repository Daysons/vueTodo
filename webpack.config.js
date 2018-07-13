const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// const devServer = require('webpack-dev-server');

module.exports = {
    entry: {
        app: "./src/index.js",
        vendor: "vue"
    },

    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "/dist")
    },

    mode: "development",

    devtool: "inline-source-map",

    devServer: {
        contentBase: "./dist",
        hot: true
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "initial"
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test:/\.css/,
                loaders: ["style","css"]
            },
            {
                test: /\.scss$/,
                loaders: ["vue-style-loader","css-loader","sass-loader"]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};