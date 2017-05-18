'use strict';
const express = require('express'),
  router = express.Router(),
  ctr = require("./ctr");

router.get('/hello', ctr.hello);
router.post('/auth', ctr.auth);
router.post('/todos', ctr.todos);
router.get('/*', ctr.static);

module.exports = router;