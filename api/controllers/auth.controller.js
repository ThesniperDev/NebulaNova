const UserModel = require('../models/user.model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
  try {
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    req.body.password = bcrypt.hashSync(req.body.password, saltRounds)
    const user = await UserModel.create(req.body)

    const token = jwt.sign({
      email: user.email
    }, process.env.MY_SECRET)

    res.status(200).json({ token, message: 'Token created succesfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error signing up')
  }
}

const logIn = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) return res.status(500).send('Error: Email or password incorrect')

    if (!bcrypt.compareSync(req.body.password, user.password))
      return res.status(404).send('Error: Email or password incorrect')

    const token = jwt.sign({
      email: user.email
    }, process.env.MY_SECRET)

    res.status(200).json({ token })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error logging up')
  }
}

module.exports = {
  signUp,
  logIn
}