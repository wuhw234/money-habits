require('dotenv').config()
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/db.js')

class Expense extends Model {}

Expense.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Expenses',
  underscored: true,
  timestamps: false,
})

module.exports = Expense