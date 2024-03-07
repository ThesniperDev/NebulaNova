const router = require('express').Router()
const { getAllBadges, getOneBadge, createBadge, updateBadge, deleteBadge } = require('../controllers/badge.controller')

router.get('/', getAllBadges)
router.get('/:id', getOneBadge)
router.post('/', createBadge)
router.put('/:id', updateBadge)
router.delete('/:id', deleteBadge)

module.exports = router