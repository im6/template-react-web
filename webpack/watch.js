"use strict";
var webpack = require('webpack'),
  path = require('path'),
  asset = require('./asset');


var baseTemplate = asset.template;

Object.assign(baseTemplate, {
  module: {
    rules: asset.rules
  },
  plugins: asset.plugins("watch"),
  entry: asset.entry("watch"),
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../temp'),
    filename: 'app.js'
  }
});

module.exports = baseTemplate;