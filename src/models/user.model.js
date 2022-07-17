require('dotenv').config()
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/db.js')

class User extends Model {}

User.init({
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  passwordHash: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  earned: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  spent: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'Users',
  underscored: true,
})

module.exports = User