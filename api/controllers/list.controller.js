const ListModel = require('../models/list.model')
const GameModel = require('../models/game.model')

const getAllLists = async (req, res) => {
  try {
    const lists = await ListModel.findAll()

    if (!lists) return res.status(404).send('Lists not found')
    res.status(200).json(lists)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting the lists')
  }
}

const getOneList = async (req, res) => {
  try {
    const list = await ListModel.findOne({
      where: {
        id: req.params.id
      }
    })

    if (!list) return res.status(404).send('list not found')
    res.status(200).json(list)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting the list')
  }
}

const createList = async (req, res) => {
  try {
    const userId = res.locals.user.id
    const list = await ListModel.create({
      title: req.body.title,
      userId: userId
    })

    res.status(200).json({ list, message: 'List creted sucessfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating the list')
  }
}

const updateList = async (req, res) => {
  try {
    const list = await ListModel.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({ list, message: 'List updated sucessfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error updating the list')
  }
}

const deleteList = async (req, res) => {
  try {
    const list = await GameModel.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!list) return res.status(404).send('List not found')
    res.status(200).json({ list, message: 'List eliminated correctly' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error deleting the list')
  }
}

const addGamesList = async (req, res) => {
  try {
    const list = await ListModel.findOne({
      where: {
        id: req.params.id
      }
    })

    const game = await GameModel.findOne({
      where: {
        title: req.body.title
      }
    })

    const listDb = await res.locals.user.hasList(list)
    console.log(listDb)

    const gameDb = await res.locals.user.hasGame(game)
    console.log(gameDb)

    if (listDb === true && gameDb === true) {
      list.addGames(game)
      return res.status(200).send(`${game} added to the list`)
    } else if (game === false) {
      return res.status(401).send(`You dont have ${game} in your collection`)
    } else {
      return res.status(401).send('You don`t have any list created')
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Error adding game to the list')
  }
}

module.exports = {
  getAllLists,
  getOneList,
  createList,
  updateList,
  deleteList,
  addGamesList
}