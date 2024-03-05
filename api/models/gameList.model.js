const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const GameListModel = sequelize.define('gameList',
  {
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
)

module.exports = GameListModel