const ReviewModel = require('../models/review.model')
const GameModel = require('../models/game.model')


///////////////////// ALL USERS /////////////////////

const getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.findAll()
        if (!reviews) return res.status(404).send('Reviews not found')
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting review')
    }
}

const getOneReview = async (req, res) => {
    try {
        const reviews = await ReviewModel.findByPk(req.params.reviewId)
        if (!reviews) return res.status(404).send('Reviews not found')
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting review')
    }
}



//////////////// REGISTERED USERS ///////////////////

const getUserReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.findAll({
            where: {
                userId : res.locals.user.id
            }
        })

        if (!reviews) return res.status(404).send('Reviews not found')
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting reviews')
    }
}

const createUserReview  = async (req, res) => {
    try {
        const game =  await GameModel.findByPk(req.params.gameId)
        if (!game) return res.status(404).send('Game not found')
        req.body.userId = res.locals.user.id
        req.body.gameId = parseInt(req.params.gameId) 
        const review = await ReviewModel.create(req.body)
         res.status(200).json({ review, message: 'Review created' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating review')
        
    }
}

const updateUserReview = async (req, res) => {
	try {
		const review = await ReviewModel.update(req.body, {
			where: {
				id: req.params.reviewId,
                userId: res.locals.user.id
			},
		})
        if (review[0]) {
			return res.status(200).json({ message: 'Review updated', review: req.params.reviewId })
		} else {
			return res.status(404).send('Review not found')
		}
	} catch (error) {
		return res.status(500).send('Error updating review')
	}
}

const deleteUserReview = async (req, res) => {
    try {
        const review = await ReviewModel.destroy({
            where: {
                id : req.params.reviewId,
                userId: res.locals.user.id
            }
        })
        if (review) {
			return res.status(200).json({ message: 'Review deleted', review: req.params.id })
		} else {
			return res.status(404).send('Review not found')
		}        
    } catch (error) {
        return res.status(500).send('Error deleting review')
    }
}


/////////////////// ADMIN USERS /////////////////////

const updateReview = async (req, res) => {
	try {
		const review = await ReviewModel.update(req.body, {
			where: {
				id: req.params.reviewId,
			},
		})
        if (review[0]) {
			return res.status(200).json({ message: 'Review updated', review: req.params.reviewId })
		} else {
			return res.status(404).send('Review not found')
		}
	} catch (error) {
		return res.status(500).send('Error updating review')
	}
}

const deleteReview = async (req, res) => {
    try {
        const review = await ReviewModel.destroy({
            where: {
                id : req.params.reviewId,
            }
        })
        if (review) {
			return res.status(200).json({ message: 'Review deleted', review: req.params.id })
		} else {
			return res.status(404).send('Review not found')
		}        
    } catch (error) {
        return res.status(500).send('Error deleting review')
    }
}




module.exports = {
    getAllReviews,
    getOneReview,
    getUserReviews,
    createUserReview,
    updateUserReview, 
    deleteUserReview,
    updateReview,
    deleteReview
}

