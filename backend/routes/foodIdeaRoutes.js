const express = require('express')
const router = express.Router()
const {uploadFoodIdea, uploadFoodIdeaImage, getRandomFoodIdea, removeFoodIdea} = 
require('../controllers/foodIdeaController')


router.route('/').get(getRandomFoodIdea).post(uploadFoodIdea)
router.route('/image').post(uploadFoodIdeaImage)

module.exports = router
