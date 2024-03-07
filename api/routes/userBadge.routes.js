const router = require('express').Router()
const { getAllUserBadges, getOneUserBadge, createUserBadge, deleteUserBadge } = require('../controllers/userBadge.controller')
const { checkAuth, checkAdmin } = require('../middleware/checkAuth.middleware')

router.get('/', checkAuth, getAllUserBadges)
router.get('/:badgeId', checkAuth, getOneUserBadge)
router.post('/', checkAuth, checkAdmin, createUserBadge)
router.delete('/:userId/:badgeId', checkAuth, checkAdmin, deleteUserBadge)

module.exports = router