/* eslint strict: 0, no-console: 0 */

'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const isDev = process.env.DEV === 'true';
const publicDir = isDev ? 'temp' : 'public';
const app = express();

app.use(express.static(publicDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  res.json({
    list: [1, 3, 5, 7, 8],
    status: 'success',
    reqBody: req.query,
  });
});

app.get('/hello', (req, res) => {
  res.json({
    status: 'success',
    data: 'hello from server',
  });
});

app.post('/auth', (req, res) => {
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
});

app.post('/todos', (req, res) => {
  setTimeout(() => {
    res.json({
      status: 'success',
      data: [
        { key: 1, value: 'wash' },
        { key: 2, value: 'walk' },
        { key: 3, value: 'smear' },
        { key: 4, value: 'drink' },
      ],
    });
  }, 400);
});

app.post('/users', (req, res) => {
  setTimeout(() => {
    res.json({
      status: 'success',
      data: [
        { key: 1, value: 'Tim' },
        { key: 2, value: 'Sam' },
        { key: 3, value: 'Mitt' },
        { key: 4, value: 'ODom' },
      ],
    });
  }, 400);
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, `../${publicDir}/index.html`));
});

module.exports = app;