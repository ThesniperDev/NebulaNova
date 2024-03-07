const UserModel = require('../api/models/user.model')
const BadgeModel = require('../api/models/badge.model')
const GameModel = require('../api/models/game.model')
const UserGameModel = require('../api/models/userGame.model')
const UserBadgeModel = require('../api/models/userBadge.model')
const sequelize = require('./index')

const dbSync = async () => {
  try {
    sequelize.sync()
    /* await UserModel.sync()
    await BadgeModel.sync()
    await GameModel.sync()
    await UserGameModel.sync() 
    await UserBadgeModel.sync() */
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

const addRelationsToModels = () => {
  try {
    BadgeModel.belongsToMany(UserModel, { through: UserBadgeModel })
    UserModel.belongsToMany(BadgeModel, { through: UserBadgeModel })
    UserModel.belongsToMany(GameModel, { through: UserGameModel })
    GameModel.belongsToMany(UserModel, { through: UserGameModel })
    console.log('Relations added to all models')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error adding relations')
  }
}

module.exports = {
  dbSync,
  addRelationsToModels
}