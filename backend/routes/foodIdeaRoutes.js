const express = require('express')
const router = express.Router()
const {uploadFoodIdea, uploadFoodIdeaImage, getFoodIdea, getSpecificFoodIdea, removeFoodIdea} = 
require('../controllers/foodIdeaController')
const {upload} = require('../middleware/uploadFIMiddleware')

router.route('/').get(getFoodIdea).post(uploadFoodIdea)
router.post('/image', upload.single("image"), uploadFoodIdeaImage)
router.route('/:id').get(getSpecificFoodIdea).delete(removeFoodIdea)

module.exports = router
