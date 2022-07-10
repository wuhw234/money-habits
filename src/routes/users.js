const bcrypt = require('bcrypt')
var express = require('express');
const { User } = require('../models/index')

var router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

router.post('/', async (req, res) => {
  const {username, password} = req.body
  try {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = await User.create({ username: username, passwordHash: passwordHash })
    res.status(201).json(user)
  }
  catch (error) {
    return res.status(400).json({ error: error })
  }
})

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

module.exports = router