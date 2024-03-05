const UserModel = require('../api/models/user.model')
const ReviewModel = require('../api/models/review.model')
const GameModel = require('../api/models/game.model')

const dbSync = async () => {
  try {
    /* await UserModel.sync() => NO DESCOMENTAR */
    //await ReviewModel.sync()
    //await GameModel.sync()
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

const addRelationsToModels = () => {
  try {
    UserModel.hasMany(ReviewModel)
    ReviewModel.belongsTo(UserModel)
    GameModel.hasMany(ReviewModel)
    ReviewModel.belongsTo(GameModel)
    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = {
  dbSync,
  addRelationsToModels
}