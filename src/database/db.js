require('dotenv').config()
const { Sequelize } = require('sequelize')
const { relationsSetup } = require('./relationsSetup')
const modelDefiners = [
	require('../models/user.model'),
	require('../models/habit.model'),
	require('../models/expense.model'),
];

const sequelize = new Sequelize(process.env.PGHOST)

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
    for (const modelDefiner of modelDefiners) {
      modelDefiner(sequelize);
    }
    relationsSetup(sequelize);
    await sequelize.sync({ force: true })

  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
    return process.exit(1)
  }
  return null
}

module.exports = { connectToDatabase, sequelize }
