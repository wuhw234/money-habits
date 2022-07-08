require('dotenv').config()
const { DataTypes } = require('sequelize')

//Add foreign key
module.exports = (sequelize) => {
  return sequelize.define('User', {
  username: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password_hash: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  earned: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  spent: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
})}