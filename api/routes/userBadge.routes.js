const router = require('express').Router()
const { getAllUserBadges, getOneUserBadge, createUserBadge, updateUserBadge, deleteUserBadge } = require('../controllers/userBadge.controller')
const { checkAuth, checkAdmin } = require('../middleware/checkAuth.middleware')

router.get('/', checkAuth, checkAdmin, getAllUserBadges)
router.get('/:userId/:badgeId', checkAuth, getOneUserBadge)
router.post('/', checkAuth, checkAdmin, createUserBadge)
router.put('/:userId/:badgeId', checkAuth, checkAdmin, updateUserBadge)
router.delete('/:userId/:badgeId', checkAuth, checkAdmin, deleteUserBadge)

module.exports = router