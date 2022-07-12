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


router.patch('/', tokenExtractor, async (req, res) => {
  try {
    if (!req.body['name'] || !req.body['cost']) {
      throw new Error('Invalid body')
    }
    const expenseId = Number(req.query.id)
    const user = await User.findByPk(req.decodedToken.id)
    const expense = await Expense.findOne({where: { id: expenseId, UserId: user.id }})
    if (!expense) {
      throw new Error('No expense found')
    }

    const updatedExpense = await expense.update({...req.body})
    res.json(updatedExpense)
  } catch(error) {
    return res.status(400).json({ error })
  }
})


router.delete('/', tokenExtractor, async (req, res) => {
  try {
      const expenseId = Number(req.query.id)
      const user = await User.findByPk(req.decodedToken.id)
      const expense = await Expense.findOne({where: { id: expenseId, UserId: user.id }})
      console.log('expense found', expense)
      if (!expense) {
        throw new Error('No expense found')
      }
      const deletedExpense = await expense.destroy()
      console.log('deleted expense', deletedExpense)
      res.json(deletedExpense)
    } catch(error) {
      return res.status(400).json({ error })
    }
})

module.exports = router