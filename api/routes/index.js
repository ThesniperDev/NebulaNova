const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/gamecollection', require('./userGame.routes'))
router.use('/game', require('./game.routes'))
router.use('/list', require('./list.routes'))

module.exports = router