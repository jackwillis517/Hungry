//Controller for all requests regarding users

// JWT for web tokens
const jwt = require('jsonwebtoken')
// Bcyrpt for hashing passwords
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler (async(req, res) => {
    // Grabs the name, email, and password from the req body
    const {username, email, password} = req.body

    // If name, email, or password is not included throw error
    if (!username || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists (so you don't create a user that already exists)
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error ('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user using the variables from the req body and the newly hashed 
    // password.
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    // Set status to 201 if user created successfully and respond with
    // userID, name, email, and a new token.
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new  Error('Invalid user data')
    }
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler (async(req, res) => {
    const {email, password} = req.body

    // Check for user email
    const user = await User.findOne({email})

    // Compairs password sent in the request with the hashed password
    // in the DB.
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user credentials')
    }
})

// @desc Get user data
// @route GET /api/users/account
// @access Private
const getAccount = asyncHandler (async(req, res) => {
    res.status(200).json(req.user)
})

// @desc Add a food idea to the users account
// @route PUT /api/users/:foodideaID/:accountID
// @access Public
const addFoodIdea = asyncHandler (async(req, res) => {
    const user = await User.updateOne(
        {_id: req.params.accountID},
        {$push: {foodideas: [req.params.foodideaID]}}
    )
    if (user){
        res.status(200).json({id: req.params.accountID, foodidea: req.params.foodideaID})
    } else {
        res.status(400)
        throw new Error ('Failed to update')
    }
})


// Generates JWT
// Signs a new token, with the given id and the secret. This token is set
// to expire in 30 days. Instead of using sessions/cookies, use tokens instead.
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getAccount,
    addFoodIdea
}