const UserModel = require('../api/models/user.model')
const BadgeModel = require('../api/models/badge.model')
const GameModel = require('../api/models/game.model')
const UserGameModel = require('../api/models/userGame.model')
const ListModel = require('../api/models/list.model')
const GameListModel = require('../api/models/gameList.model')
const ReviewModel = require('../api/models/review.model')
const UserBadgeModel = require('../api/models/userBadge.model')
const sequelize = require('./index')

const dbSync = async () => {
  try {
    //await UserModel.sync()
    //await GameModel.sync()
    //await UserGameModel.sync()
    //await ListModel.sync()
    //await GameListModel.sync()
    //await ReviewModel.sync()
    //await BadgeModel.sync()
    //await UserBadgeModel.sync()
    //await sequelize.sync({ alter: true })
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

const addRelationsToModels = () => {
  try {
    UserModel.belongsToMany(UserModel, { through: "friend_list", as: "friend" })
    UserModel.hasMany(ReviewModel)
    ReviewModel.belongsTo(UserModel)
    GameModel.hasMany(ReviewModel)
    ReviewModel.belongsTo(GameModel)
    UserModel.belongsToMany(GameModel, { through: UserGameModel })
    GameModel.belongsToMany(UserModel, { through: UserGameModel })
    UserModel.hasMany(ListModel)
    ListModel.belongsTo(UserModel)
    ListModel.belongsToMany(GameModel, { through: GameListModel })
    GameModel.belongsToMany(ListModel, { through: GameListModel })
    BadgeModel.belongsToMany(UserModel, { through: UserBadgeModel })
    UserModel.belongsToMany(BadgeModel, { through: UserBadgeModel })
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