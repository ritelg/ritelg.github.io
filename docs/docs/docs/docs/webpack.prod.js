const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ManifestPlugin = require('webpack-manifest-plugin')

let config = {
    mode: 'production',
    entry: {
        app: ['./assets/js/app.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets'),
        publicPath: '.',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }
        ]
    }
}
module.exports = config

