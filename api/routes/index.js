const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/badge', require('./badge.routes'))

module.exports = router