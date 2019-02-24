const express = require('express');
/* eslint new-cap: 0 */
const router = express.Router();
const ctr = require('./ctr');

router.get('/hello', ctr.hello);
router.post('/auth', ctr.auth);
router.post('/todos', ctr.todos);
router.get('/*', ctr.static);

module.exports = router;
