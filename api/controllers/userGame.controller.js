const axios = require('axios')
const GameModel = require('../models/game.model')
const UserGameModel = require('../models/userGame.model')

const getAllUserGames = async (req, res) => {
  try {
    const user = res.locals.user

    const games = await user.getGames()

    if (!games) return res.status(404).send('Games not found')
    res.status(200).json(games)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting all games')
  }
}

const getOneUserGame = async (req, res) => {
  try {
    const game = await GameModel.findByPk(req.params.id)

    const user = res.locals.user

    const gameCollection = await user.hasGame(game)

    if (!game) return res.status(404).send('Game not found')
    if (gameCollection === false) return res.status(404).send('This game are not in your collection')
    if (game && gameCollection) res.status(200).json(game)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting the game')
  }
}

const createUserGame = async (req, res) => {
  try {
    const findGame = await GameModel.findOne({
      where: {
        title: req.body.title
      }
    })

    const gameDb = await res.locals.user.hasGames(findGame)
    console.log(gameDb)

    if (!findGame) {
      try {
        const response = await axios({
          method: 'post',
          url: process.env.API_URL,
          headers: {
            "Client-ID": process.env.CLIENT_ID,
            Authorization: `Bearer ${process.env.API_TOKEN}`
          },
          data: `fields id,name,cover.url,genres.name;
          where name = ${JSON.stringify(req.body.title)};`
        })
        if (response.data.length > 0) {
          const game = await GameModel.create({ title: response.data[0].name, image: response.data[0].cover.url, genre: response.data[0].genres[0].name })
          res.locals.user.addGames(game,
            {
              through:
              {
                status: req.body.status,
                platform: req.body.platform
              }
            })
          return res.status(200).json({ game, message: 'Game created' })
        } else {
          return res.status(404).send('Game not found in external API')
        }
      } catch (error) {
        res.status(500).send('Something is wrong with the response of the API')
      }
    }
    if (findGame && gameDb === false) {
      res.locals.user.addGames(findGame,
        {
          through:
          {
            status: req.body.status,
            platform: req.body.platform
          }
        })
      return res.status(200).json({ findGame, message: 'Game created' })
    }

    return res.status(500).send('The game was already in the collection')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating the game')
  }
}

const updateUserGame = async (req, res) => {
  try {
    const game = await GameModel.findByPk(req.params.id)
    const user = res.locals.user

    const gameCollection = await user.hasGame(game)

    if (!game) return res.status(404).send('Game Not found')

    if (gameCollection === false) return res.status(404).send('This game are not in your collection')

    if (gameCollection) {
      const updateGame = await UserGameModel.update(req.body, {
        where: {
          userId: res.locals.user.id,
          gameId: req.params.id
        }
      })

      return res.status(200).json({ updateGame, message: `${updateGame} has been updated successfully` })
    }

  } catch (error) {
    console.log(error)
    res.status(500).send('Error updating the game')
  }
}

const deleteUserGame = async (req, res) => {
  try {
    const game = await GameModel.findByPk(req.params.id)
    const user = res.locals.user

    const gameCollection = await user.hasGame(game)

    if (!game) return res.status(404).send('Game Not found')

    if (gameCollection === false) return res.status(404).send('This game are not in your collection')

    if (gameCollection) {
      const deleteGame = await user.removeGame(game)

      return res.status(200).json({ deleteGame, message: `${deleteGame} has been deleted successfully` })
    }

  } catch (error) {
    console.log(error)
    res.status(500).send('Error deleting the game')
  }
}

module.exports = {
  getAllUserGames,
  getOneUserGame,
  createUserGame,
  updateUserGame,
  deleteUserGame
}