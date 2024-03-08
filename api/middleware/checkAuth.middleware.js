const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send('Unauthorized')
  jwt.verify(
    req.headers.authorization,
    process.env.MY_SECRET,
    async (error, payload) => {
      try {
        if (error) return res.status(401).send('Unauthorized')
        const user = await UserModel.findOne({
          where: {
            email: payload.email
          }
        })
        if (!user) return res.status(401).send('Unauthorized')
        res.locals.user = user

        next()
      } catch (error) {
        res.status(500).send('Error on authentication')
      }
    }
  )
}

const checkAdmin = (req, res, next) => {
  if (res.locals.user.role !== 'admin') return res.status(401).send('Unauthorized')
  next()
}

module.exports = {
  checkAuth,
  checkAdmin
}