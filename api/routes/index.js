const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/game', require('./game.routes'))

module.exports = router