//Tells the server which controller to use for food ideas

const express = require('express')
const router = express.Router()
const {uploadFoodIdea, uploadFoodIdeaImage, getRandomFoodIdea, getSpecificFoodIdea, removeFoodIdea} = 
require('../controllers/foodIdeaController')


router.route('/').get(getRandomFoodIdea).post(uploadFoodIdea)
router.route('/image').post(uploadFoodIdeaImage)
router.route('/:id').get(getSpecificFoodIdea)

module.exports = router
