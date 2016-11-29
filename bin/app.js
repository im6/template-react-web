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

app.post('/todos', function (req, res) {
  setTimeout(function(){
    res.json({
      status: 'success',
      data: [
        {key: 1,value: 'wash'},
        {key: 2,value: 'walk'},
        {key: 3,value: 'smear'},
        {key: 4,value: 'drink'},
      ]
    });
  }, 400);

});

app.post('/users', function (req, res) {
  setTimeout(function(){
    res.json({
      status: 'success',
      data: [
        {key: 1,value: 'Tim'},
        {key: 2,value: 'Sam'},
        {key: 3,value: 'Mitt'},
        {key: 4,value: 'ODom'},
      ]
    });
  }, 400);

});


module.exports = app;

