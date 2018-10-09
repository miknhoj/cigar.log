const express = require('express');
const router = express.Router({ mergeParams: true });
const { User, Cigar } = require('../db/model')

// SHOW ALL
router.get('/', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const cigars = user.cigarLog
  res.send(cigars)
})

// SHOW ONE
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const cigar = user.cigarLog.id(req.params.id)
  res.send(cigar)
} )


// CREATE
router.post('/', (req, res) => {
  const newCigar = new Cigar(req.body)
  User.findById(req.params.userId)
    .then((user) => {
      user.cigarLog.push(newCigar)
      return user.save()
    })
    .then((user) => {
      res.send(user)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      const cigar = user.cigarLog.id(req.params.id)
      const updatedCigar = req.body

      if (updatedCigar.cigarName) {
        cigar.cigarName = updatedCigar.cigarName
      }
      if (updatedCigar.rating) {
        cigar.rating = updatedCigar.rating
      }
      return user.save()
    })
    .then (user => {
      res.send(user)
    })
  })
// DELETE
router.delete('/:id', (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      return user.update({ $pull: {cigarLog: { _id: req.params.id}}})
    })
    .then(user => {
      res.send(user)
    })
})

module.exports = router;
