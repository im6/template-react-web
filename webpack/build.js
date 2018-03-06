"use strict";
var webpack = require('webpack'),
  path = require('path'),
  base = require('./base'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  FriendlyErrors = require('friendly-errors-webpack-plugin');


var commonsChunk = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js',
  minChunks: Infinity
}),
  VENDORS = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux-saga',
    'immutable'
  ];

Object.assign(base, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/entry/index_prod.jsx',
    vendor: VENDORS,
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../public'),
    filename: 'app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['public'], {
      root: path.join(__dirname, '../'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mange:{
        "screw-ie8" : true
      },
      compress : {
        "screw_ie8" : true,
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      title: 'React Starter',
      template: 'src/template/index.html',
      favicon: './src/content/img/favicon.ico',
      hash:true,
      showErrors: false
    }),
    commonsChunk,
  ],
});

module.exports = base;
