const UserBadgeModel = require('../models/userBadge.model')

const getAllUserBadges = async (req, res) => {
    try {
        const userBadges = await UserBadgeModel.findAll()

        if (!userBadges) return res.status(404).send('User badges not found')
        res.status(200).json(userBadges)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting user badges')
    }
}

const getOneUserBadge = async (req, res) => {
    try {
        const userBadge = await UserBadgeModel.findByPk({
            where: {
                userId: req.params.userId,
                badgeId: req.params.badgeId
            }
        })
        if (!userBadge) return res.status(404).send('User badge not found')
        res.status(200).json(userBadge)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting user badge')
    }
}

const createUserBadge = async (req, res) => {
    try {
        const userBadge = await UserBadgeModel.create(req.body)
        res.status(200).json(userBadge)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating badge')
    }
}

const updateUserBadge = async (req, res) => {
    try {
        const [userBadgeExist, userBadge] = await UserBadgeModel.update(req.body, {
            returning: true,
            where: {
                userId: req.params.userId,
                badgeId: req.params.badgeId
            }
        })
        if (userBadgeExist !== 0) return res.status(200).json({ message: 'User badge updated', userBadge: userBadge })
        res.status(404).send('User badge not found')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error updating user badge')
    }
}

const deleteUserBadge = async (req, res) => {
    try {
        const userBadge = await UserBadgeModel.destroy({
            where: {
                userId: req.params.userId,
                badgeId: req.params.badgeId
            }
        })
        if (!userBadge) return res.status(404).send('User badge not found')
        res.status(200).send('User badge removed')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error removing user badge')
    }
}

module.exports = {
    getAllUserBadges,
    getOneUserBadge,
    createUserBadge,
    updateUserBadge,
    deleteUserBadge
}