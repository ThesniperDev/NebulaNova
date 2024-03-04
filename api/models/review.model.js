const { DataTypes } = require('sequelize')
const sequelize = require('../../db/')

const reviewModel = sequelize.define('review',{
    description:{
        type: DataTypes.STRING
    },
    range:{
        type: DataTypes.FLOAT,
        validate: {
            min: 1,
            max: 5
        }

    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gameId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = reviewModel