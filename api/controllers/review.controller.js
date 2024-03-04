const ReviewModel = require('../models/review.model')

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

const getAllReviewsByUser = async (req, res) => {
    try {
        const reviews = await ReviewModel.findAll({
            where: {
                userId : req.params.userId
            }
        })

        if (!reviews) return res.status(404).send('Reviews not found')
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting reviews')
    }
}

const createReview  = async (req, res) => {
    try {
        const review = await ReviewModel.create(req.body)
         res.status(200).json({ review, message: 'Review created' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating review')
        
    }
}

const updateReview = async (req, res) => {
	try {
		const review = await ReviewModel.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
        if (review) {
			return res.status(200).json({ message: 'Review updated', review: review })
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
                id : req.params.id
            }
        })
        if (review) {
			return res.status(200).json({ message: 'Review deleted', review: review })
		} else {
			return res.status(404).send('Review not found')
		}        
    } catch (error) {
        return res.status(500).send('Error deleting review')
    }
}

module.exports = {
    getAllReviews,
    getAllReviewsByUser,
    createReview,
    updateReview, 
    deleteReview
}

