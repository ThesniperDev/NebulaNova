const router = require('express').Router()
const { getAllUserGames, getOneUserGame, createUserGame, updateUserGame, deleteUserGame } = require('../controllers/userGame.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/', checkAuth, getAllUserGames)
router.get('/:id', checkAuth, getOneUserGame)
router.post('/', checkAuth, createUserGame)
router.put('/:id', checkAuth, updateUserGame)
router.delete('/:id', checkAuth, deleteUserGame)

module.exports = router