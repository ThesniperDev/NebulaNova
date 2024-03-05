const router = require('express').Router()
const { getAllLists, getOneList, createList, updateList, deleteList, addGamesList } = require('../controllers/list.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/', checkAuth, getAllLists)
router.get('/:id', getOneList)
router.post('/', checkAuth, createList)
router.put('/:id', updateList)
router.delete('/:id', deleteList)
router.post('/:id', checkAuth, addGamesList)

module.exports = router