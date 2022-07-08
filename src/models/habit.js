require('dotenv').config()
const { DataTypes } = require('sequelize')

//ADD FOREIGN KEY
module.exports = (sequelize) => {
  return sequelize.define('Habit', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}
