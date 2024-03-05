const axios = require('axios')
const GameModel = require('../models/game.model')

const getAllGames = async (req, res) => {
  try {
    const games = await GameModel.findAll()

    if (!games) return res.status(404).send('Games not found')
    res.status(200).json(games)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting all games')
  }
}

const getOneGame = async (req, res) => {
  try {
    const game = await GameModel.findByPk(req.params.id)

    if (!game) return res.status(404).send('Game not found')
    res.status(200).json(game)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting the game')
  }
}

const createGame = async (req, res) => {
  try {
    const findGame = await GameModel.findOne({
      where: {
        title: req.body.title
      }
    })

    if (!findGame) {
      try {
        const response = await axios({
          method: 'post',
          url: process.env.API_URL,
          headers: {
            "Client-ID": process.env.CLIENT_ID,
            Authorization: `Bearer ${process.env.API_TOKEN}`
          },
          data: `fields id,name,cover.url;
          where name = ${JSON.stringify(req.body.title)};`
        })
        console.log(response.data)
        if (response.data.length > 0) {
          const game = await GameModel.create({ title: response.data[0].name, image: response.data[0].cover.url })
          return res.status(200).json({ game, message: 'Game created' })
        } else {
          return res.status(404).send('Game not found in external API')
        }
      } catch (error) {
        res.status(500).send('Something is wrong with the response of the API')
      }
    }

    res.status(200).json({ findGame: findGame.title, message: 'Game already exist' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating the game')
  }
}

const updateGame = async (req, res) => {
  try {
    const [gameExist, game] = await GameModel.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })

    if (gameExist !== 0) return res.status(200).json({ game, message: 'Game updated correctly' })

    res.status(404).send('Game not found')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error updating the game')
  }
}

const deleteGame = async (req, res) => {
  try {
    const game = await GameModel.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!game) return res.status(404).send('Game not found')
    res.status(200).json({ game, message: 'Game eliminated correctly' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error deleting the game')
  }
}

module.exports = {
  getAllGames,
  getOneGame,
  createGame,
  updateGame,
  deleteGame
}

//