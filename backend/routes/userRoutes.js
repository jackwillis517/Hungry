//Tells the server which controller to use for user authentication

const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getAccount} = 
require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/account', protect, getAccount)

module.exports = router