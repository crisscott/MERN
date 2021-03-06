const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UgifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UgifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
})