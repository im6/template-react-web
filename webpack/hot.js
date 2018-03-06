"use strict";
var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  base = require('./base'),
  HOST = "127.0.0.1",
  PORT = "3000";

Object.assign(base, {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/entry/index.jsx',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://0.0.0.0:' + PORT,
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Starter HOT DEV',
      template: 'src/template/index.html',
      //favicon: 'src/content/img/favicon.ico',
      hash:true,
      showErrors: false
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("dev")
      }
    }),
  ],
  devServer: {
    contentBase: "./public",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    proxy: {
      '*': {
        target: 'http://localhost:8080', // NOTE: your express.js server port number
        secure: false
      }
    }
  }
});

module.exports = base;