/* eslint strict: 0, no-console: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const globalConfig = require('./config/global');
const route = require('./route');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

app.listen(globalConfig.port, () => {
  console.log(`app is listening to port: ${globalConfig.port}`);
});
