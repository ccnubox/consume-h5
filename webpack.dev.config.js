const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
// var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    entry: {
        'index': ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, ""),
        publicPath: '/dist/',
        filename: '[name].[hash].js'
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname, "src"),
            ],
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.styl$/,
            loaders: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }, {
            test: /\.png$/,
            loaders: [
                'file-loader?name=i/[hash].[ext]'
            ]
        }]
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.vue'],
        modules: ["node_modules", "spritesmith-generated"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'template/index.html',
            inject: false,
            template: './template/index.ejs',
            chunks: ['index']
        }),
        new HtmlWebpackHarddiskPlugin(),
        // new SpritesmithPlugin({
        //     src: {
        //         cwd: path.resolve(__dirname, 'src/img'),
        //         glob: '*.png'
        //     },
        //     target: {
        //         image: path.resolve(__dirname, 'src/spritesmith-generated/sprite.png'),
        //         css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.scss')
        //     },
        //     apiOptions: {
        //         cssImageRef: '../spritesmith-generated/sprite.png'
        //     },
        //     spritesmithOptions:{
        //         algorithm:'top-down'
        //     }
        // })
    ]
};