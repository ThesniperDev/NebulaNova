const UserModel = require('../api/models/user.model')
const ReviewModel = require('../api/models/review.model')

const dbSync = async () => {
  try {
    //await UserModel.sync()
    //await ReviewModel.sync()
    console.log('All models synchronized')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = dbSync