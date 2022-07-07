require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.PGHOST)

//Add foreign key
const user = sequelize.define('User', {
user_id: {
  type: DataTypes.UUID,
  primaryKey: true,
  autoIncrement: true
},
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
},
current_balance: {
  type: DataTypes.FLOAT
})