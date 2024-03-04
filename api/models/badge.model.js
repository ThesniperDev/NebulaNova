const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const BadgeModel = sequelize.define('badge',{
    badgeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = BadgeModel