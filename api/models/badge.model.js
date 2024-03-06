const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const BadgeModel = sequelize.define('badge',{
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = BadgeModel