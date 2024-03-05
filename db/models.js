const UserModel = require('../api/models/user.model')
const GameModel = require('../api/models/game.model')
const UserGameModel = require('../api/models/userGame.model')

const dbSync = async () => {
  try {
    //await UserModel.sync()
    //await GameModel.sync()
    //await UserGameModel.sync()
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

const addRelationsToModels = () => {
  try {
    UserModel.belongsToMany(GameModel, { through: UserGameModel })
    GameModel.belongsToMany(UserModel, { through: UserGameModel })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  dbSync,
  addRelationsToModels
}