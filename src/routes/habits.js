var express = require('express');
const jwt = require('jsonwebtoken')
const { User, Habit } = require('../models/index')
const tokenExtractor = require('./middleware/tokenExtractor')

var router = express.Router();

router.get('/', tokenExtractor, async (req, res) => {
  try {
    const habits = await Habit.findAll({
      where: {
        UserId: req.decodedToken.id
      }
    })
    res.json(habits)
  }
  catch(error) {
    return res.status(400).json({ error })
  }
})

router.post('/', tokenExtractor, async (req, res) => {
    try {
      const user = await User.findByPk(req.decodedToken.id)
      const habit = await Habit.create({...req.body, UserId: user.id})
      res.json(habit)
    } catch(error) {
      return res.status(400).json({ error })
    }
})

router.patch('/', tokenExtractor, async (req, res) => {
  try {
    if (!req.body['name'] || !req.body['value']) {
      throw new Error('Invalid body')
    }
    const habitId = Number(req.query.id)
    const user = await User.findByPk(req.decodedToken.id)
    const habit = await Habit.findOne({where: { id: habitId, UserId: user.id }})
    if (!habit) {
      throw new Error('No habit found')
    }

    const updatedExpense = await habit.update({...req.body})
    res.json(updatedExpense)
  } catch(error) {
    return res.status(400).json({ error })
  }
})

router.delete('/', tokenExtractor, async (req, res) => {
  try {
    const habitId = Number(req.query.id)
    const user = await User.findByPk(req.decodedToken.id)
    const habit = await Habit.findOne({where: { id: habitId, UserId: user.id }})
    console.log('habit found', habit)
    if (!habit) {
      throw new Error('No habit found')
    }
    const deletedHabit = await habit.destroy()
    console.log('deleted habit', deletedHabit)
    res.json(deletedHabit)
  } catch(error) {
    return res.status(400).json({ error })
  }
})

module.exports = router