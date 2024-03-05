const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const UserGameModel = sequelize.define('userGame',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING
    },
    platform: {
      type: DataTypes.STRING
    }
  }
)

module.exports = UserGameModel