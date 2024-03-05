const router = require('express').Router()
/* const { getAllUsers, createUser } = require('../controllers/user.controller') */
const { addListUser } = require('../controllers/user.controller')
const { signUp, logIn } = require('../controllers/auth.controller')

/* router.get('/', getAllUsers)
router.post('/', createUser) */
router.post('/signup', signUp)
router.post('/login', logIn)

module.exports = router