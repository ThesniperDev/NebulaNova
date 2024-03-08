const router = require('express').Router()
const { getUserReviews, getOneUserReview, createUserReview, updateUserReview, deleteUserReview } = require('../controllers/userReview.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')


router.get('/', checkAuth, getUserReviews)
router.get('/:reviewId', checkAuth, getOneUserReview)
router.post('/:gameId', checkAuth, createUserReview)
router.put('/:reviewId', checkAuth, updateUserReview)
router.delete('/:reviewId', checkAuth, deleteUserReview)

module.exports = router