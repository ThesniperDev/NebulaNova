const router = require('express').Router()
const { getAllGames, getOneGame, createGame, updateGame, deleteGame } = require('../controllers/game.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/', checkAuth, getAllGames)
router.get('/:id', checkAuth, getOneGame)
router.post('/', checkAuth, createGame)
router.put('/:id', checkAuth, updateGame)
router.delete('/:id', checkAuth, deleteGame)

module.exports = router