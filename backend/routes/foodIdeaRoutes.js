const express = require('express')
const router = express.Router()
const {uploadFoodIdea, uploadFoodIdeaImage, getFoodIdea, removeFoodIdea} = 
require('../controllers/foodIdeaController')
const {upload} = require('../middleware/uploadFIMiddleware')

router.post('/', uploadFoodIdea)
router.post('/image', upload.single("image"), uploadFoodIdeaImage)
router.route('/:id').get(getFoodIdea).delete(removeFoodIdea)

module.exports = router
