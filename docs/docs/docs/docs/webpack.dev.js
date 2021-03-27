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

