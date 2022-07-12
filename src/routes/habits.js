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
        const habitId = req.query.id
        const user = await User.findByPk(req.decodedToken.id)
        const habit = await Habit.update({...req.body, UserId: user.id}, {
            where: {
                id: habitId,
                UserId: user.id
            }
        })
        res.json(habit)
      } catch(error) {
        return res.status(400).json({ error })
      }
})

router.delete('/', async (req, res) => {
    try {
        const habitId = req.query.id
        const user = await User.findByPk(req.decodedToken.id)
        const habit = await Habit.update({...req.body, UserId: user.id}, {
            where: {
                id: habitId,
                UserId: user.id
            }
        })
        res.json(habit)
      } catch(error) {
        return res.status(400).json({ error })
      }
})

module.exports = router