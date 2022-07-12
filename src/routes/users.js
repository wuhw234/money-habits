const bcrypt = require('bcrypt')
var express = require('express');
const { User } = require('../models/index')

var router = express.Router();

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

module.exports = router