const router = require('express').Router()
const { getAllGames, getOneGame, createGame, updateGame, deleteGame } = require('../controllers/game.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/', getAllGames)
router.get('/:id', getOneGame)
router.post('/', checkAuth, createGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router