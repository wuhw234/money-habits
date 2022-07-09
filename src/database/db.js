require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.PGHOST)

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
    return process.exit(1)
  }
  return null
}

module.exports = { connectToDatabase, sequelize }
