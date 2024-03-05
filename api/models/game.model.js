const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const GameModel = sequelize.define('game', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING
  }
})

module.exports = GameModel