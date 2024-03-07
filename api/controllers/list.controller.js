const ListModel = require('../models/list.model')

const getAllLists = async (req, res) => {
  try {
    const userId = res.locals.user.id
    const lists = await ListModel.findAll({
      where: {
        userId: userId
      }
    })

    if (!lists) return res.status(404).send('Lists not found')
    res.status(200).json(lists)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error getting all lists')
  }
}

const getOneList = async (req, res) => {
  try {
    const userId = res.locals.user.id
    const list = await ListModel.findOne({
      where: {
        id: req.params.id,
        userId: userId
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

    res.status(200).json({ list, message: 'List created sucessfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating the list')
  }
}

const updateList = async (req, res) => {
  try {
    const userId = res.locals.user.id
    const list = await ListModel.update(req.body, {
      where: {
        id: req.params.id,
        userId: userId
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
    const userId = res.locals.user.id
    const list = await ListModel.destroy({
      where: {
        id: req.params.id,
        userId: userId
      }
    })

    if (!list) return res.status(404).send('List not found')
    res.status(200).json({ list, message: 'List deleted correctly' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error deleting the list')
  }
}



module.exports = {
  getAllLists,
  getOneList,
  createList,
  updateList,
  deleteList
}