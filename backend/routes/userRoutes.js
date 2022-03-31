//Tells the server which controller to use for user authentication

const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getAccount, addFoodIdea} = 
require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/account', protect, getAccount)
router.put('/account/:foodideaID/:accountID', addFoodIdea)

module.exports = router