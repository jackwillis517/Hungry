const express = require('express')
const router = express.Router()
const {uploadFoodIdea, uploadFoodIdeaImage, getFoodIdea, getSpecificFoodIdea, removeFoodIdea} = 
require('../controllers/foodIdeaController')


router.route('/').get(getFoodIdea).post(uploadFoodIdea)
router.route('/image').post(uploadFoodIdeaImage)
router.route('/:id').get(getSpecificFoodIdea).delete(removeFoodIdea)

module.exports = router
