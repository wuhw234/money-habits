require('dotenv').config()
const { Sequelize } = require('sequelize')
const { relationsSetup } = require('./relationsSetup')

const sequelize = new Sequelize(process.env.PGHOST)

try {
  (async () => {await sequelize.authenticate()})();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const modelDefiners = [
	require('../models/user.model'),
	require('../models/habit.model'),
	require('../models/expense.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

relationsSetup(sequelize);

(async () => {
  await sequelize.sync();
})()

// const main = async () => {
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//     sequelize.close()
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }

// main()
module.exports = { sequelize }
