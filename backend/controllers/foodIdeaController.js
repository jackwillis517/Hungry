// Controller for all requests regarding food ideas

const asyncHandler = require('express-async-handler')
const foodIdea = require('../models/foodIdeaModel')
const {cloudinary} = require('../config/cloudinary')

// @desc Adds a new food ideas text data
// @route POST /api/foodIdea
// @access Private
const uploadFoodIdea = asyncHandler(async (req, res) => {  
    // Grab title, description, links, and image reference from req body
    const {title, description, links, cloudinary_url} = req.body

    // If title, description, or links is empty throw error
    if (!title || !description || !links || !cloudinary_url){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if food idea exists
    const foodIdeaExists = await foodIdea.findOne({title})
    if (foodIdeaExists) {
        res.status(400)
        throw new Error('Food idea already exists')
    }

    // Create new food idea
    const foodidea = await foodIdea.create({
        title,
        description,
        links,
        cloudinary_url
    })

    if (foodidea) {
        res.status(201).json({
            title: foodidea.title,
            description: foodidea.description,
            links: foodidea.links,
            cloudinary_url: foodidea.cloudinary_url
        })
    } else {
        res.status(400)
        throw new Error('Invalid food idea data')
    }
})

// @desc Adds a new food ideas image data
// @route POST /api/foodIdea/image
// @access Private
const uploadFoodIdeaImage = asyncHandler (async (req, res) => {
   try {
       const fileStr = req.body.data
       const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
           upload_preset: 'hungry_foodideaimages'
       })
       console.log(uploadedResponse.secure_url)
       res.json({cloudinary_url: uploadedResponse.secure_url})
   } catch (error) {
       console.error(error)
       res.status(500).json({err: 'Something went wrong :('})
   } 
})

// @desc Gets a random food idea from the database
// @route GET /api/foodIdea/
// @access Public
const getRandomFoodIdea = asyncHandler (async (req, res) => {
    const foodidea = await foodIdea.find()
    if (foodIdea){
        res.status(200).json(foodidea)
    }
    else {
        res.status(400)
        throw new Error ('Food idea not found')
    }
})

// NOT FUNCTIONING
// @desc Deletes a specific food idea
// @route DELETE /api/foodIdea/:id
// @access Private
const removeFoodIdea = asyncHandler (async (req, res) => {
    const foodidea = foodIdea.findById(req.params.id)

    if (!foodidea) {
        res.status(400)
        throw new Error('Food idea not found')
    }

    await foodidea.remove()
    
    res.status(200).json({id: req.params.id})
})

module.exports = { 
    uploadFoodIdea, 
    uploadFoodIdeaImage,
    getRandomFoodIdea,
    removeFoodIdea
}