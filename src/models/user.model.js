require('dotenv').config()
const { DataTypes } = require('sequelize')

//Add foreign key
module.exports = (sequelize) => {
  return sequelize.define('User', {
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
    type: DataTypes.TEXT,
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
})}