const router = require('express').Router()
const { getAllLists, getOneList, createList, updateList, deleteList } = require('../controllers/list.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/', checkAuth, getAllLists)
router.get('/:id', checkAuth, getOneList)
router.post('/', checkAuth, createList)
router.put('/:id', checkAuth, updateList)
router.delete('/:id', checkAuth, deleteList)

module.exports = router