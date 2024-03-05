const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const sequelize = require('./index')

const dbSync = async () => {
  try {

    /* await sequelize.sync()
    await UserModel.sync() => NO DESCOMENTAR
    await ListModel.sync() */
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = dbSync