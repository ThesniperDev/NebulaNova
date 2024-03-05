const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/game', require('./game.routes'))
router.use('review', require('./review.routes'))

module.exports = router