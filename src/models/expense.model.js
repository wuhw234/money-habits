require('dotenv').config()
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Expense', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
}