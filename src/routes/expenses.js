const jwt = require('jsonwebtoken')
var express = require('express');
const { User, Expense } = require('../models/index')
const tokenExtractor = require('./middleware/tokenExtractor')

var router = express.Router();

router.get('/', tokenExtractor, async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      where: {
        UserId: req.decodedToken.id
      }
    })
    res.json(expenses)
  }
  catch(error) {
    return res.status(400).json({ error })
  }
})

router.post('/', tokenExtractor, async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id)
    const note = await Expense.create({...req.body, UserId: user.id})
    res.json(note)
  } catch(error) {
    return res.status(400).json({ error })
  }
})


router.patch('/:id', tokenExtractor, async (req, res) => {
  try {
      const expenseId = req.params.id
      const user = await User.findByPk(req.decodedToken.id)
      const expense = await Expense.update({...req.body, UserId: user.id}, {
          where: {
              id: expenseId,
              UserId: user.id
          }
      })
      res.json(expense)
    } catch(error) {
      return res.status(400).json({ error })
    }
})


router.delete('/:id', async (req, res) => {
  try {
      const expenseId = req.params.id
      const user = await User.findByPk(req.decodedToken.id)
      const expense = await Expense.update({...req.body, UserId: user.id}, {
          where: {
              id: expenseId,
              UserId: user.id
          }
      })
      res.json(expense)
    } catch(error) {
      return res.status(400).json({ error })
    }
})

module.exports = router