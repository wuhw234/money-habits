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
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  password_hash: {
    type: DataTypes.STRING(64),
    allowNull: false,
    validate: {
      is: /^[0-9a-f]{64}$/i
    }
  },
  earned: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  spent: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Users'
})

module.exports = User