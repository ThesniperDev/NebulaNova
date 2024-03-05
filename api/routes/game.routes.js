const router = require('express').Router()
const { getAllGames, getOneGame, createGame, updateGame, deleteGame } = require('../controllers/game.controller')

router.get('/', getAllGames)
router.get('/:id', getOneGame)
router.post('/', createGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router