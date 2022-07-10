const Expense = require('./expense.model.js')
const Habit = require('./habit.model.js')
const User = require('./user.model.js')

User.hasMany(Habit);
User.hasMany(Expense);

(async () => {
  await User.sync({ force: true })
  await Expense.sync({ force: true })
  await Habit.sync({ force: true })
})()

module.exports = {
    Expense,
    Habit,
    User
}