const router = require('express').Router()
const { getAllGames, getOneGame, createGame, updateGame, deleteGame } = require('../controllers/game.controller')
const { checkAuth, checkAdmin } = require('../middleware/checkAuth.middleware')

router.get('/', getAllGames)
router.get('/:id', getOneGame)
router.post('/', checkAuth, checkAdmin, createGame)
router.put('/:id', checkAuth, checkAdmin, updateGame)
router.delete('/:id', checkAuth, checkAdmin, deleteGame)

module.exports = router