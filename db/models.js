const UserModel = require('../api/models/user.model')
const BadgeModel = require('../api/models/badge.model')
const sequelize = require('./index')

const dbSync = async () => {
  try {

    /* await sequelize.sync()
    await UserModel.sync()    NO DESCOMENTARLOS A NO SER QUE SEA NECESARIO
    await BadgeModel.sync() */

    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

const addRelationsToModels = () => {
  try {
    BadgeModel.belongsToMany(UserModel, { through: 'user_badges' })
    UserModel.belongsToMany(BadgeModel, { through: 'user_badges' })
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