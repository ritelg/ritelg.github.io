const path = require('path')

let config = {
    mode: 'development',
    watch: true,
    entry: {
        app: ['./assets/js/app.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets'),
        publicPath: '.'
    },
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }]
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]',
                            outputPath: 'images'
                        },
                    },
                ],
            }, {
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
    },
    plugins: [
    ]
}
module.exports = config

