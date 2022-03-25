const asyncHandler = require('express-async-handler')
const foodIdea = require('../models/foodIdeaModel')
const fs = require('fs')

// @desc Adds a new food idea
// @route POST /api/foodIdea
// @access Private
const uploadFoodIdea = asyncHandler(async (req, res) => {
    
    // Grab title, description, and links from req body
    const {title, description, links} = req.body

    // If title, description,  or links is empty throw error
    if (!title || !description || !links){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if food idea exists
    const foodIdeaExists = await foodIdea.findOne({title})
    if (foodIdeaExists) {
        res.status(400)
        throw new Error('Food idea already exists')
    }

    // Create new food idea ()
    const foodidea = await foodIdea.create({
        title,
        description,
        links
    })

    if (foodidea) {
        res.status(201).json({
            title: foodidea.title,
            description: foodidea.description,
            links: foodidea.links
        })

    } else {
        res.status(400)
        throw new Error('Invalid food idea data')
    }
})

// @desc Adds a new food idea image
// @route POST /api/foodIdea/image
// @access Private
const uploadFoodIdeaImage = (req, res) => {
    console.log(req.file)
    console.log("Image uploaded successfully")
}

// @desc Adds a new food idea image
// @route GET /api/foodIdea/:id
// @access Private
const getFoodIdea = asyncHandler ( async (req, res) => {
    const foodidea = foodIdea.findById(req.params.id)
    const path = `../foodideaimages/${foodIdea.title}.jpg`
    if (fs.existsSync(path)) {
        console.log('food idea image found')
    }
    else {
        console.log('food idea image does not exist')
    }
    console.log(foodidea)
})

// @desc Adds a new food idea image
// @route DELETE /api/foodIdea/:id
// @access Private
const removeFoodIdea = asyncHandler ( async (req, res) => {
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
    getFoodIdea, 
    removeFoodIdea
}