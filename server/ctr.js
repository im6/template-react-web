'use strict';

const globalConfig = require('./config/global'),
  path = require('path');

const privateFn = {
  test: 123,
};

module.exports = {
  hello: function(req, res, next){
    res.json({
      status: 'success',
      data: 'hello from server',
    });
  },
  auth: function(req, res, next){
    console.log(`username: ${req.body.username}`);
    console.log(`password: ${req.body.password}`);
    setTimeout(() => {
      res.json({
        status: 'success',
        data: {
          isAuth: true,
        },
      });
    }, 1000);
  },
  todos: function(req, res, next){
    res.json({
      status: 'success',
      data: [
        { key: 1, value: 'wash' },
        { key: 2, value: 'walk' },
        { key: 3, value: 'smear' },
        { key: 4, value: 'drink' },
      ],
    });
  },
  static: function(req, res, next){
    res.sendFile(path.resolve(__dirname, `../public/index.html`));
  },
};