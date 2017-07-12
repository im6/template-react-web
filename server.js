/* eslint strict: 0, no-console: 0 */
"use strict";
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const globalConfig = require('./server/config/global');
const route = require('./server/route');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

const server = app.listen(globalConfig.port, function () {
    console.log(`app is listening to port: ${globalConfig.port}`);
});