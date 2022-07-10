require('dotenv').config()
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/db.js')

class Habit extends Model {}

Habit.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Habits',
  underscored: true,
  timestamps: false,
})
module.exports = Habit