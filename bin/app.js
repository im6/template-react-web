"use strict";
var express = require('express'),
  app = express(),
  path = require('path'),
  isDev = process.env.DEV == 'true';

var publicDir = isDev ? 'temp' : 'public';

app.use(express.static(publicDir));
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname,`../${publicDir}/index.html`) );
});

app.get('/test', function (req, res) {
  res.json({
    list:[1,3,5,7,8],
    status: 'success'
  });
});

module.exports = app;

