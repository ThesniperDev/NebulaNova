const ReviewModel = require('../models/review.model')
const GameModel = require('../models/game.model')
const UserModel = require('../models/user.model')

const getUserReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.findAll({
      include: [GameModel, UserModel],
      where: {
        userId: res.locals.user.id
      }
    })

    if (!reviews) return res.status(404).send('You don`t have any review')
    res.status(200).json(reviews)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting reviews')
  }
}

const getOneUserReview = async (req, res) => {
  try {
    const review = await ReviewModel.findOne({
      where: {
        id: req.params.reviewId,
        userId: res.locals.user.id
      }
    })

    if (!review) return res.status(404).send('This review doesn`t exist')

    res.status(200).json(review)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting review')
  }
}

const createUserReview = async (req, res) => {
  try {
    const game = await GameModel.findByPk(req.params.gameId)

    const gameCollection = await res.locals.user.hasGame(game)

    if (!game) return res.status(404).send('Game not found')

    if (!gameCollection) return res.status(404).send('This game is not in your collection')
    const review = await ReviewModel.create({
      description: req.body.description,
      range: req.body.range,
      userId: res.locals.user.id,
      gameId: req.params.gameId
    })

    res.status(200).json({ review, message: 'Review created' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating review')

  }
}

const updateUserReview = async (req, res) => {
  try {
    const user = res.locals.user
    const review = await ReviewModel.findOne({
      where: {
        id: req.params.reviewId,
        userId: res.locals.user.id
      }
    })

    const reviewUser = await user.hasReview(review)
    console.log(reviewUser)

    if (!review) return res.status(404).send('Review not exist')

    if (!reviewUser) return res.status(404).send('This review not in your collection')

    const updateReview = await ReviewModel.update(req.body, {
      where: {
        id: req.params.reviewId,
        userId: res.locals.user.id
      }
    })
    res.status(200).json({ updateReview, message: 'Review has been updated' })
  } catch (error) {
    return res.status(500).send('Error updating review')
  }
}

const deleteUserReview = async (req, res) => {
  try {
    const review = await ReviewModel.destroy({
      where: {
        id: req.params.reviewId,
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

module.exports = {
  getUserReviews,
  getOneUserReview,
  createUserReview,
  updateUserReview,
  deleteUserReview,
}