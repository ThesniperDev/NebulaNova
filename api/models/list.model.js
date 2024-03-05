const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const ListModel = sequelize.define('list', {
    listName: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = ListModel