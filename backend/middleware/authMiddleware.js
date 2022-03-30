//Authentication middleware for login

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// When a user makes a req it verifies they have a bearer token. 
// Used to protect routes and authenticate that a user is logged in.

const protect = asyncHandler (async (req, res, next) => {
    let token

    // If the token is found
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    // If no token is found
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }


})

module.exports = {protect}