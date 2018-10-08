const express = require('express');
const router = express.Router();
const { User } = require('../db/model')

//SHOW ALL
router.get('/', async function(req, res) {
  const users = await User.find()
  res.send(users);
});

//SHOW ONE
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.send(user)
})

module.exports = router;
