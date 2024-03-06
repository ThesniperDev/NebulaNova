const UserGameModel = require('../models/userGame.model')
const BadgeModel = require('../models/badge.model')

const addedGamesRecount = async (req, res) => {
    try {
        const userGames = await UserGameModel.findAll({
            where: {
                id: req.params.userId
            } 
        })

        const listGames = await res.locals.user.countGames(userGames)
        

        if (listGames.lenght > 0) return res.locals(200).send(`You have ${listGames} in your collection`)
        res.locals(200).send("You don't have any games added to your collection")

    } catch (error) {
        console.log(error)
        res.status(500).send("Error showing the user's games")
    }
}

const userBadges = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error giving the badge')
    }
}