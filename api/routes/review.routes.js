const router = require('express').Router()
const { getAllReviews, getOneReview, getUserReviews, createUserReview, updateUserReview, deleteUserReview, updateReview, deleteReview } = require('../controllers/review.controller')
const { checkAuth, checkAdmin } = require('../middleware/checkAuth.middleware')

///////////////////// ALL USERS /////////////////////

router.get('/all', getAllReviews)
router.get('/:reviewId', getOneReview)

//////////////// REGISTERED USERS ///////////////////

router.get('/user/', checkAuth,  getUserReviews)
router.post('/user/:gameId', checkAuth, createUserReview )
router.put('/user/:reviewId', checkAuth, updateUserReview)
router.delete('/user/:reviewId', checkAuth, deleteUserReview)

/////////////////// ADMIN USERS /////////////////////

router.put('/admin/:reviewId', checkAuth, checkAdmin, updateReview)
router.delete('/admin/:reviewId', checkAuth, checkAdmin, deleteReview)


module.exports = router