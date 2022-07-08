require('dotenv').config()
const { Sequelize, Pool } = require('pg')
const { getUserModel } = require('../models/user')
const { getHabitModel } = require('../models/habit')
const { getExpenseModel } = require('../models/expense')

const pool = new Pool()

const sequelize = new Sequelize(process.env.PGHOST)
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const User = getUserModel(sequelize)
const Habit = getHabitModel(sequelize)
const Expense = getExpenseModel(sequelize)
User.hasMany(Habit)
User.hasMany(Expense)

await sequelize.sync()

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}

module.User = User
module.Habit = Habit
module.Expense = Expense