const mongoose = require('mongoose')

const foodIdeaSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    description: {
        type: String,
        required: [true, 'Please add a description of the food idea'],
        unique: true
    },
}, {
    // Just generates a time stamp when this schema is used (created/updated)
    timestamps: true
})

module.exports = mongoose.model('Foodidea', foodIdeaSchema)