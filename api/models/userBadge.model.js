const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const UserBadgeModel = sequelize.define('userBadge', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    badgeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = UserBadgeModel