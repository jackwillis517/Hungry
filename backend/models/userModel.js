// Instructions for how to store users in the mongo database

//Setting variable to require the mongoose package
const mongoose = require('mongoose')

//Schema for user data storage in the database
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
}, {
    // Just generates a time stamp when this schema is used (created/updated)
    timestamps: true
})

//Exports the model to the database
module.exports = mongoose.model('User', userSchema)