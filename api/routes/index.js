const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/badge', require('./badge.routes'))
router.use('/game', require('./game.routes'))
router.use('/userbadge', require('./userBadge.routes'))

module.exports = router