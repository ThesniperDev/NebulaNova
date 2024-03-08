const BadgeModel = require('../models/badge.model')
const UserBadgeModel = require('../models/userBadge.model')

const getAllUserBadges = async (req, res) => {
    try {

        const userBadges = res.locals.user.getBadges()

        if (!userBadges) return res.status(404).send('User badges not found')
        res.status(200).json(userBadges)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting user badges')
    }
}

const getOneUserBadge = async (req, res) => {
    try {
        const badge = await BadgeModel.findByPk(req.params.id)

        const badgeUser = res.locals.user.hasBadge(badge)

        if (!badge) return res.status(404).send('Badge not found')

        if (!badgeUser) return res.status(404).send('You don`t have this badge')

        res.status(200).json(badge)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting user badge')
    }
}

const createUserBadge = async (req, res) => {
    try {
        const userBadge = await UserBadgeModel.create(req.body)

        res.status(200).json({ userBadge, message: 'Badge added' })

    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating badge')
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
    deleteUserBadge
}