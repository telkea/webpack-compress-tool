const path = require('path');
const plugin_uglifyjs = require('uglifyjs-webpack-plugin');
const file = {
    entry: './assets/js/main.js',
    output: 'bundle.js',
    publicPath: './assets/',
}

let config = {
    entry: file.entry,
    output: {
        path: path.resolve('./assets/js/'),
        filename: file.output,
        publicPath: file.publicPath
    },
    devtool: 'source-map',
    module: {
        rules: []
    },
    plugins: [new plugin_uglifyjs({sourceMap: true})]
}
/*EXPORT*/
module.exports = config
