const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const GameModel = require('../api/models/game.model')
const UserGameModel = require('../api/models/userGame.model')
const sequelize = require('./index')

const dbSync = async () => {
  try {
    /* await sequelize.sync()
    await UserModel.sync()
    await GameModel.sync()
    await UserGameModel.sync() */
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

const addRelationsToModels = () => {
  try {
    
    UserModel.hasMany(ListModel)
    ListModel.belongsTo(UserModel)
    UserModel.belongsToMany(GameModel, { through: UserGameModel })
    GameModel.belongsToMany(UserModel, { through: UserGameModel })
    ListModel.belongsToMany(GameModel, { through: 'game_lists' })
    GameModel.belongsToMany(ListModel, { through: 'game_lists' })
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
