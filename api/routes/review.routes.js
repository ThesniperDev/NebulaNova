const router = require('express').Router()
const { getAllReviews, getOneReview, updateReview, deleteReview } = require('../controllers/review.controller')
const { checkAuth, checkAdmin } = require('../middleware/checkAuth.middleware')

///////////////////// ALL USERS /////////////////////

router.get('/all', getAllReviews)
router.get('/:reviewId', getOneReview)

/////////////////// ADMIN USERS /////////////////////

router.put('/admin/:reviewId', checkAuth, checkAdmin, updateReview)
router.delete('/admin/:reviewId', checkAuth, checkAdmin, deleteReview)


module.exports = router