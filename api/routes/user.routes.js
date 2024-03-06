const router = require('express').Router()
/* const { getAllUsers, createUser } = require('../controllers/user.controller') */
const { signUp, logIn } = require('../controllers/auth.controller')
const { checkAuth } = require('../middleware/checkAuth.middleware')
const { getAllUsers, addUserFriend, deleteUserFriend, getFriendList } = require('../controllers/friend.controller')


/* router.get('/', getAllUsers)
router.post('/', createUser) */
router.post('/signup', signUp)
router.post('/login', logIn)
router.get('/users', checkAuth, getAllUsers)
router.get('/friend_list', checkAuth, getFriendList)
router.post('/add/:friendId', checkAuth, addUserFriend)
router.delete('/delete/:friendId', checkAuth, deleteUserFriend)

module.exports = router