var express = require('express');
const { Habit } = require('../models/index')

var router = express.Router();

router.get('/', async (req, res) => {
  const habits = await Habit.findAll()
  res.json(habits)

})

router.post('/', async (req, res) => {
  const habit = req.body
})

router.patch('/', async (req, res) => {

})

router.delete('/', async (req, res) => {
    
})

module.exports = router