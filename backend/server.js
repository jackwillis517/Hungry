const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors')

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/foodIdea', require('./routes/foodIdeaRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

























// To whom it may concern:
// This backend was souly created by one person, if it sucks I'm sorry 
// ....it was my first time. Oh, and special thanks to Brad Traversy, his 
// youtube videos acted like steroids for this race horse (more like 
// a shetland pony (the really small service horses)).