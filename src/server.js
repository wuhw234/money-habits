const express = require('express')
const { sequelize, connectToDatabase } = require('./database/db')
const users = require('./routes/users')
const habits = require('./routes/habits')
const expenses = require('./routes/expenses')

const app = express()

app.use(express.json())
app.use('/api/habits', habits)
app.use('/api/expenses', expenses)
app.use('/api/users', users)

const start = async () => {
  await connectToDatabase()
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()