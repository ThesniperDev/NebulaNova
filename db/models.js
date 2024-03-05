const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const sequelize = require('./index')

const dbSync = async () => {
  try {

    /* await sequelize.sync()
    await UserModel.sync({
      force: { force: true }
    })                         => NO DESCOMENTAR A NO SER QUE SEA NECESARIO
    await ListModel.sync({
      force: { force: true }
    }) */

    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

const addRelationsToModels = () => {
  try {
    UserModel.hasMany(ListModel)
    ListModel.belongsTo(UserModel)
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
