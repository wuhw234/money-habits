require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.PGHOST)

//ADD FOREIGN KEY
const Habit = sequelize.define('Habit', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  value: {
    type: DataTypes.FLOAT
  }
})

module.exports = Habit