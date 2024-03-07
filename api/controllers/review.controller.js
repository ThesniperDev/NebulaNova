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

const getOneReview = async (req, res) => {
    try {
        const review = await ReviewModel.findByPk(req.params.reviewId)
        if (!review) return res.status(404).send('Review not found')
        res.status(200).json(review)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting review')
    }
}

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
                id: req.params.reviewId,
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
    updateReview,
    deleteReview
}

