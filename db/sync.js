const UserModel = require('../api/models/user.model')

const dbSync = async () => {
  try {
    /* await UserModel.sync() => NO DESCOMENTAR */
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = dbSync