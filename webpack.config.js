var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var examples = [
  'demo'
];

var entry = {}

examples.forEach(function (name) {
  entry[name] = ['./client/'+name+'/main.js', hotMiddlewareScript]
})

var devConfig = {
    entry: entry,
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.less$/,
            loader: 'style!css?sourceMap!resolve-url!less-loader'
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
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
};

module.exports = devConfig;
