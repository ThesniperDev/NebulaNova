const router = require('express').Router()
const { getAllReviews, getAllReviewsByUser, createReview, updateReview, deleteReview } = require('../controllers/review.controller')
//const { checkAuth } = require('../middleware/checkAuth.middleware')

router.get('/', /* checkAuth, */ getAllReviews)
router.get('/:userId', /* checkAuth, */ getAllReviewsByUser)

//router.post('/', /* checkAuth, */ createReview )
router.post('/', createReview)
router.put('/:id', updateReview)
router.delete('/:id', deleteReview)

module.exports = router