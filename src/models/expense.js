require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.PGHOST)

//ADD FOREIGN KEY
const expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cost: {
    type: DataTypes.INTEGER
  }
})

module.exports = expense