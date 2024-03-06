const ListModel = require('../models/list.model')
const GameModel = require('../models/game.model')
const GameListModel = require('../models/gameList.model')

const getAllGamesList = async (req, res) => {
  try {
    const userId = res.locals.user.id

    const list = await ListModel.findOne({
      where: {
        id: req.params.listId,
        userId: userId
      }
    })

    const gamesList = await list.getGames()

    if (!gamesList) return res.status(404).send('There are no games in this list')
    res.status(200).json(gamesList)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting all games')
  }
}

const getOneGameList = async (req, res) => {
  try {
    const userId = res.locals.user.id

    const list = await ListModel.findOne({
      where: {
        id: req.params.listId,
        userId: userId
      }
    })

    const game = await GameModel.findByPk(req.params.gameId)

    const gameList = await list.hasGame(game)

    if (!game) return res.status(404).send('Game not found')
    if (gameList === false) return res.status(404).send('This game is not in your collection')
    if (game && gameList) res.status(200).json(game)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting the game')
  }
}

const addGamesList = async (req, res) => {
  try {
    const list = await ListModel.findOne({
      where: {
        id: req.params.listId
      }
    })

    const game = await GameModel.findOne({
      where: {
        title: req.body.title
      }
    })

    const listDb = await res.locals.user.hasList(list)

    const gameDb = await res.locals.user.hasGame(game)

    const checkGameList = await list.hasGame(game)

    if (listDb === true && gameDb === true && checkGameList === false) {
      list.addGames(game)
      return res.status(200).send(`${req.body.title} added to the list`)
    } else if (gameDb === false && checkGameList === false) {
      return res.status(401).send(`You dont have ${req.body.title} in your collection`)
    } else if (checkGameList) {
      return res.status(500).send(`${req.body.title} is already on the list`)
    } else {
      return res.status(401).send('You don`t have any list created')
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Error adding game to the list')
  }
}

const deleteGameList = async (req, res) => {
  try {
    const userId = res.locals.user.id

    const list = await ListModel.findOne({
      where: {
        id: req.params.listId,
        userId: userId
      }
    })

    const game = await GameModel.findByPk(req.params.gameId)

    const gameList = await list.hasGame(game)

    if (!game) return res.status(404).send('Game not found')

    if (gameList === false) return res.status(404).send('This game is not in your list')

    if (gameList) {
      const deleteGame = await list.removeGame(game)

      return res.status(200).json({ deleteGame, message: `${game.dataValues.title} has been deleted successfully` })
    }

  } catch (error) {
    console.log(error)
    res.status(500).send('Error deleting the game')
  }
}

module.exports = {
  getAllGamesList,
  getOneGameList,
  addGamesList,
  deleteGameList
}