'use strict';

var path = require('path');

var config = {
    addVendor: function(name, path, add) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(name));
    },
    cache: true,
    watch: true,
    useMemoryFs: false,
    entry: {
        main: './src/_entry.js'
    },
    output: {
        publicPath: 'scripts/',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        noParse: [],
        loaders: [{ // Important, keep this one at the front, or adjust in hot.conf
            test: /\.js$/,
            exclude: /node_modules|bower_components/,
            loaders: ['babel-loader?experimental&optional=runtime&cacheDirectory=.babel-cache']
        }]
    },
    resolve: {
        alias: {
            'common': path.join(__dirname, '/src/common')
        }
    },
    plugins: []
};


module.exports = config;
