const express = require('express');
const router = express.Router({ mergeParams: true });
const { User, Cigar } = require('../db/model')

// SHOW ALL
router.get('/', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const cigars = user.cigarLog
  res.send(cigars)
})

// CREATE
router.post('/', (req, res) => {
  const newCigar = new Cigar()
  User.findById(req.params.userId)
    .then((user) => {
      user.cigars.push(newCigar)
      return user.save()
    })
    .then((user) => {
      res.send(user)
    })
})

module.exports = router;
