var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var productionConfig = [{
    entry: {
        demo: './client/demo/main.js',
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/'
    },
    module: {
        loaders: [, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!resolve-url!less-loader')
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/
        }]
    },
    plugins: [
        new ExtractTextPlugin('./[name]/index.css', {
            allChunks: true
        })
    ],
    vue:{
        loaders:{
            css:'style!css!less'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
}];

module.exports = productionConfig;
