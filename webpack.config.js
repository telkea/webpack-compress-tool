const path = require('path');
const plugin_uglifyjs = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: ['./assets/js/main.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/js/')
    },
    devtool:'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    plugins: [new plugin_uglifyjs({ sourceMap: true })]
}