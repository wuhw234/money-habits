const jwt = require('jsonwebtoken')

const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      try {
        req.decodedToken = jwt.verify(authorization.substring(7), process.env.SECRET)
      } catch{
        res.status(401).json({ error: 'token invalid' })
      }
    }  else {
      res.status(401).json({ error: 'token missing' })
    }
    next()
  }

module.exports = tokenExtractor