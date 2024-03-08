const router = require('express').Router()
const { signUp, logIn } = require('../controllers/auth.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')
const { getAllUsers, addUserFriend, deleteUserFriend, getFriendList } = require('../controllers/friend.controller')

router.post('/signup', signUp)
router.post('/login', logIn)
router.get('/users', checkAuth, getAllUsers)
router.get('/friend', checkAuth, getFriendList)
router.post('/friend/:friendId', checkAuth, addUserFriend)
router.delete('/friend/:friendId', checkAuth, deleteUserFriend)

module.exports = router