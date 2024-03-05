const router = require('express').Router()
const { getAllLists, getOneList, createList, updateList, deleteList } = require('../controllers/list.controller')

router.get('/', getAllLists)
router.get('/:id', getOneList)
router.post('/', createList)
router.put('/:id', updateList)
router.delete('/:id', deleteList)

module.exports = router