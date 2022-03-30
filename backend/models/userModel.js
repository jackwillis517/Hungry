//Database model for a user

const mongoose = require('mongoose')

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

module.exports = mongoose.model('User', userSchema)