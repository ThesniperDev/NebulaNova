const UserModel = require('../api/models/user.model')
const BadgeModel = require('../api/models/badge.model')

const dbSync = async () => {
  try {
    /* await UserModel.sync() => NO DESCOMENTAR */
    /* await BadgeModel.sync({
      force: true
    }) => NO DESCOMENTAR */

    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = dbSync