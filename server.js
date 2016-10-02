"use strict";
let app = require('./bin/app'),
  port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port: '+ port);
});