const express = require('express');
const router = express.Router();
const { User } = require('../db/model')

/* GET users listing. */
router.get('/', async function(req, res) {
  const users = await User.find()
  res.send(users);
});

module.exports = router;
