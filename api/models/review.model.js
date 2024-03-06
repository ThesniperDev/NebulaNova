const { DataTypes } = require('sequelize')
const sequelize = require('../../db/')

const reviewModel = sequelize.define('review',{
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    range:{
        type: DataTypes.FLOAT,
        validate: {
            min: 1,
            max: 5
        },
        allowNull: false

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