const Expense = require('./expense.model.js')
const Habit = require('./habit.model.js')
const User = require('./user.model.js')

User.hasMany(Habit);
User.hasMany(Expense);

(async () => {
  await User.sync()
  await Expense.sync()
  await Habit.sync()
})()

module.exports = {
    Expense,
    Habit,
    User
}