const GameModel = require('../models/game.model')

const getAllGames = async (req, res) => {
  try {
    const games = await GameModel.findAll()

    if (!games) return res.status(404).send('Games not founds')

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
    const game = await GameModel.create(req.body)

    res.status(200).json({ game, message: 'Game created succesfully' })
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

    if (gameExist !== 0) {
      return res.status(200).json({ game, message: 'Game updated' })
    } else {
      return res.status(404).send('Game not found')
    }

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

    res.status(200).json({ game, message: 'Game deleted successfully' })
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