const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const ListModel = sequelize.define('list', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = ListModel