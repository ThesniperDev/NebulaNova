const router = require('express').Router()
const { getAllBadges, getOneBadge, createBadge, updateBadge, deleteBadge } = require('../controllers/badge.controller')
const { checkAuth, checkAdmin } = require('../middleware/checkAuth.middleware')

router.get('/', checkAuth, getAllBadges)
router.get('/:id', checkAuth, getOneBadge)
router.post('/', checkAuth, checkAdmin, createBadge)
router.put('/:id', checkAuth, checkAdmin, updateBadge)
router.delete('/:id', checkAuth, checkAdmin, deleteBadge)

module.exports = router