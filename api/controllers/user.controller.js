const UserModel = require('../models/user.model')
const ListModel = require('../models/list.model')

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll()

    if (!users) return res.status(404).send('Users not found')
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting users')
  }
}

const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(200).json({ user, message: 'User created' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating user')
  }
}

module.exports = {
  getAllUsers,
  createUser,
} 