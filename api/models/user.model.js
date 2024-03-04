const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const UserModel = sequelize.define('user', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
    validate: {
      isIn: [[undefined, 'admin', 'user']]
    }
  }
})

module.exports = UserModel