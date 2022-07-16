const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
var express = require('express');
const { User } = require('../models/index')

var router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ 
    where: {
      username: username
    }
  })
  console.log('1')
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password'
    })
  }
  console.log('2')
  const userForToken = {
    username: user.username,
    id: user.id
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  res
    .status(200)
    .send({ token, username: user.username})
})

module.exports = router