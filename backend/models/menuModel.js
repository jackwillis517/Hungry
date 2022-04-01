// Instructions for how to store menus in the mongo database

//Setting variable to require the mongoose package
const mongoose = require('mongoose')

//Schema for menu data storage in the database
const menuSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a name']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    foodideas: [{
        type: String,
        required: [true, 'Please add food ideas']
    }]
}, {
    // Just generates a time stamp when this schema is used (created/updated)
    timestamps: true
})

//Exports the model to the database
module.exports = mongoose.model('Menu', userSchema)