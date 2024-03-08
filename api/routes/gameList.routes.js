const router = require('express').Router()
const { getAllGamesList, getOneGameList, addGamesList, deleteGameList } = require('../controllers/gameList.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/:listId', checkAuth, getAllGamesList)
router.get('/:listId/:gameId', checkAuth, getOneGameList)
router.post('/:listId', checkAuth, addGamesList)
router.delete('/:listId/:gameId', checkAuth, deleteGameList)

module.exports = router