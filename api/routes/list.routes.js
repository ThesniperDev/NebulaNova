const router = require('express').Router()
const { getAllLists, getOneList, createList, updateList, deleteList, addGameList } = require('../controllers/list.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/', getAllLists)
router.get('/:id', getOneList)
router.post('/', checkAuth, createList)
router.put('/:id', updateList)
router.delete('/:id', deleteList)

module.exports = router