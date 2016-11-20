"use strict";
var express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  isDev = process.env.DEV == 'true';

var publicDir = isDev ? 'temp' : 'public';

app.use(express.static(publicDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname,`../${publicDir}/index.html`) );
});

app.get('/test', function (req, res) {
  res.json({
    list:[1,3,5,7,8],
    status: 'success',
    reqBody: req.query
  });
});

app.post('/test', function (req, res) {
  res.json({
    status: 'success',
    reqBody: req.body
  });
});

module.exports = app;

