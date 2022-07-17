const express = require('express')
const cors = require('cors')
const { sequelize, connectToDatabase } = require('./database/db')
const signup = require('./routes/signup')
const habits = require('./routes/habits')
const expenses = require('./routes/expenses')
const login = require('./routes/login')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/habits', habits)
app.use('/api/expenses', expenses)
app.use('/api/signup', signup )
app.use('/api/login', login)

const start = async () => {
  await connectToDatabase()
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()