const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const GameModel = require('../api/models/game.model')
const UserGameModel = require('../api/models/userGame.model')
const ListModel = require('../api/models/list.model')
const GameListModel = require('../api/models/gameList.model')

const dbSync = async () => {
  try {
    //await UserModel.sync()
    //await GameModel.sync()
    //await UserGameModel.sync()
    //await ListModel.sync()
    //await GameListModel.sync()
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
    UserModel.hasMany(ListModel)
    ListModel.belongsTo(UserModel)
    ListModel.belongsToMany(GameModel, { through: GameListModel })
    GameModel.belongsToMany(ListModel, { through: GameListModel })
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
