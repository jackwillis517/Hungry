// Instructions for how to store food ideas in the mongo database

//Setting variable to require the mongoose package
const mongoose = require('mongoose')

//Schema for food idea data storage in the database
const foodIdeaSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description of the food idea'],
    },
    links: {
        type: String,
        required: [true, 'Please add links to recipies'],
        unique: true,
    },
    cloudinary_url: {
        type: String
    }
}, {
    // Just generates a time stamp when this schema is used (created/updated)
    timestamps: true
})

//Exports the model to the database
module.exports = mongoose.model('Foodidea', foodIdeaSchema)