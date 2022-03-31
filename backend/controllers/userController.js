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
        throw new Error('Invalid user data')
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
// @route Get /api/users/account
// @access Private
const getAccount = asyncHandler (async(req, res) => {
    res.status(200).json(req.user)
})

// @desc Change a users' password
// @route Put /api/users/account/resetpass
// @access Public
const changePass = asyncHandler (async(req, res) => {
    const {email, newpassword, newpassword2} = req.body
    console.log(email, newpassword, newpassword2)
    //Check if required data is sent in the body of the request
    if (!email || !newpassword || !newpassword2){
        res.status(400)
        throw new Error('All required data not sent')
    }
    //Check if the user exists
    const user = await User.findOne({email})
    if (user && newpassword === newpassword2) {
        //Hash new password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newpassword, salt)
        //Update old hashed password with new one
        await User.updateOne(
            {email: email},
            {password: hashedPassword}
        )
        //Respond with user email if password was changed
        res.status(200).json({email: email})
    } else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

// @desc Change a users' email
// @route Put /api/users/account/resetemail
// @access Public
const changeEmail = asyncHandler (async(req, res) => {
    const {email, newemail} = req.body
    //Check if required data is sent in the body of the request
    if (!email || !newemail){
        res.status(400)
        throw new Error('All required data not sent')
    }
    //Check if the user exists
    const user = await User.findOne({email})
    if (user) {
        //Update old hashed password with new one
        await User.updateOne(
            {email: email},
            {email: newemail}
        )
        //Respond with user email if email was changed
        res.status(200).json({email: newemail})
    } else {
        res.status(400)
        throw new Error('Use does not exists')
    }
})

// @desc Change a users' username
// @route Put /api/users/account/resetname
// @access Public
const changeName = asyncHandler (async(req, res) => {
    const {email, newusername} = req.body
    //Check if required data is sent in the body of the request
    if (!email || !newusername){
        res.status(400)
        throw new Error('All required data not sent')
    }

    //Check if the user exists
    const user = await User.findOne({email})
    if (user) {
        //Update old hashed password with new one
        await User.updateOne(
            {email: email},
            {username: newusername}
        )
        //Respond with user email if username was changed
        res.status(200).json({username: newusername})
    } else {
        res.status(400)
        throw new Error('Use does not exists')
    }
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

// @desc Remove a food idea to the users account
// @route DELETE /api/users/:foodideaID/:accountID
// @access Public
const removeFoodIdea = asyncHandler (async(req, res) => {
    const user = await User.updateOne(
        {_id: req.params.accountID},
        {$pullAll: {foodideas: [req.params.foodideaID]}}
    )
    if (user){
        res.status(200).json({id: req.params.accountID, foodidea: req.params.foodideaID})
    } else {
        res.status(400)
        throw new Error ('Failed to delete')
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
    changePass,
    changeEmail,
    changeName,
    addFoodIdea,
    removeFoodIdea
}