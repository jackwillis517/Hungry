//Database model for a food idea

const mongoose = require('mongoose')

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

module.exports = mongoose.model('Foodidea', foodIdeaSchema)