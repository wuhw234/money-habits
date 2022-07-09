const { response } = require('express');
var express = require('express');
const { Expense } = require('../models/index')

var router = express.Router();

router.get('/', async (req, res) => {
  // const user = req.params.user
  const expenses = await Expense.findAll()
  res.json(expenses)
})

router.post('/', async (req, res) => {
  try {
  const expense = req.body
  const newExpense = await Expense.create(expense)
  console.log(newExpense)
  res.status(201).end()
  }
  catch(err) {
    console.log('error xd', err)
  }
})

module.exports = router