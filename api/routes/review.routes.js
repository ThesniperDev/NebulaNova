const router = require('express').Router()
const { getAllReviews, getAUserReviews, createReview, updateReview, deleteReview } = require('../controllers/review.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/all', checkAuth, getAllReviews)
router.get('/', checkAuth,  getAUserReviews)

router.post('/:gameId', checkAuth, createReview )
router.put('/:id', updateReview)
router.delete('/:id', deleteReview)

module.exports = router