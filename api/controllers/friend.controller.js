const UserModel = require('../models/user.model')

const getAllUsers = async (req,res) => {
    try {
        const users = await UserModel.findAll()
        if (!users) return res.status(404).send('There are no users in the Database')
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).send('Something has gone wrong')        
    }
}

const getFriendList = async (req,res) => {
    try {
        const user = await UserModel.findByPk(res.locals.user.id)
        const userFriends = await user.getFriend({where: res.locals.user.id})
        if (!userFriends) return res.status(404).send('You have no friends on your list')
        res.status(200).json(userFriends)
        return userFriends
    } catch (error) {
        console.log(error)
        res.status(500).send('There are no users in the Database')        
    }
}

const addUserFriend = async (req,res) => {
    try {
        const user = res.locals.user
        const friend = await UserModel.findByPk(req.params.friendId)
        if (!friend || user.id === friend.id) return res.status(404).send('User not found')
        if(await user.hasFriend(friend)) return res.send('The user is on your friends list')
        res.status(200).send(`Now ${friend.userName} and you are friends`)
        user.addFriend(friend)
    } catch (error) {        
        console.log(error)
        res.status(500).send('Your friend request has failed')
    }
}

const deleteUserFriend = async (req,res) => {
    try {
        const user = res.locals.user
        const friend = await UserModel.findByPk(req.params.friendId)
        if (!friend || user.id === friend.id) return res.status(404).send('User not found')
        if(! await user.hasFriend(friend)) return res.send('The user is not on your friends list')
        res.status(200).send(`Now ${friend.userName} and you are not friends`)
        user.removeFriend(friend)
    } catch (error) {        
        console.log(error)
        res.status(500).send('Your unfriend request has failed')
    }
}

module.exports = {
    getAllUsers,
    addUserFriend,
    deleteUserFriend,
    getFriendList
}

