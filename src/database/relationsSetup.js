function relationsSetup(sequelize) {
	const { User, Habit, Expense } = sequelize.models;

	User.hasMany(Habit);
	User.hasMany(Expense);
}

module.exports = { relationsSetup };