const ListModel = require('../models/list.model')

const getAllLists = async (req, res) => {
    try {
        const lists = await ListModel.findAll()

        if (!lists) return res.status(404).send('Lists not found')
        res.status(200).json(lists)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting lists')
    }
}

const getOneList = async (req, res) => {
    try {
        const list = await ListModel.findByPk(req.params.id)

        if(!list) return res.status(404).send('List not found')
        res.status(200).json(list)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting list')
    }
}

const createList = async (req, res) => {
    try {
        const list = await ListModel.create(req.body)
        res.status(200).json({ message: 'List created', list })
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating list')
    }
}

const updateList = async (req, res) => {
    try {
        const [listExist, list] = await ListModel.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })

        if (listExist !== 0) return res.status(200).json({ message: 'List Updated', list: list })
        res.status(404).send('List not found')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error updating list')
    }
}

const deleteList = async (req, res) => {
    try {
        const list = await ListModel.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!list) return res.status(404).send('List not found')
        res.status(200).send('List removed')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error removing list')
    }
}

module.exports = {
    getAllLists,
    getOneList,
    createList,
    updateList,
    deleteList
}