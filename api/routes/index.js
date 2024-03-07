const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/gamecollection', require('./userGame.routes'))
router.use('/game', require('./game.routes'))
router.use('/list', require('./list.routes'))
router.use('/gamelist', require('./gameList.routes'))
router.use('/review', require('./review.routes'))
router.use('/usereview', require('./userReview.routes'))

module.exports = router