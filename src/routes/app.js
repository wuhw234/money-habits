const express = require('express')
const app = express()

app.use(require('./habits'))
app.use(require('./spending'))
app.use(require('./users'))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})