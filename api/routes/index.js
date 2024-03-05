const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/list', require('./list.routes'))

module.exports = router