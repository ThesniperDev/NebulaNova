const BadgeModel = require('../models/badge.model')

const getAllBadges = async (req, res) => {
    try {
        const badges = await BadgeModel.findAll()

        if (!badges) return res.status(404).send('Badges not found')
        res.status(200).json(badges)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting badges')
    }
}

const getOneBadge = async (req, res) => {
    try {
        const badge = await BadgeModel.findbyPk({
            where: {
                id: req.params.id
            }
        })
        if (!badge) return res.status(404).send('Badge not found')
        res.status(200).json(badge)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting badge')
    }
}

const createBadge = async (req, res) => {
    try {
        const badge = await BadgeModel.create(req.body)
        res.status(200).json(badge)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating badge')
    }
}

const updateBadge = async (req, res) => {
    try {
        const [badgeExist, badge] = await BadgeModel.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (badgeExist !== 0) return res.status(200).json({ message: 'Badge updated', badge: badge })
        res.status(404).send('Badge not found')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error updating badge')
    }
}

const deleteBadge = async (req, res) => {
    try {
        const badge = await BadgeModel.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!badge) return res.status(404).send('Badge not found')
        res.status(200).send('Badge removed')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error removing badge')
    }
}

module.exports = {
    getAllBadges,
    getOneBadge,
    createBadge,
    updateBadge,
    deleteBadge
}