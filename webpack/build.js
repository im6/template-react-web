"use strict";
var webpack = require('webpack'),
  path = require('path'),
  asset = require('./asset');


var baseTemplate = asset.template;

Object.assign(baseTemplate, {
  module: {
    rules: asset.rules
  },
  plugins: asset.plugins("build"),
  entry: asset.entry("build"),
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'app.js'
  }
});

module.exports = baseTemplate;