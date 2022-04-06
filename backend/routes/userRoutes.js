//Tells the server which controller to use for user authentication

const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getAccount, changePass, changeEmail, 
    changeName, addFoodIdea, removeFoodIdea} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/account', protect, getAccount)
router.route('/account/:foodideaID/:accountID').put(addFoodIdea).delete(removeFoodIdea)
router.put('/account/resetpass', changePass)
router.put('/account/resetemail', changeEmail)
router.put('/account/resetname', changeName)

module.exports = router