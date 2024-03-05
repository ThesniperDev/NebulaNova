const UserModel = require('../api/models/user.model')
const GameModel = require('../api/models/game.model')

const dbSync = async () => {
  try {
    //await UserModel.sync() => NO DESCOMENTAR
    //await GameModel.sync({ force: true }) => NO DESCOMENTAR
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = dbSync