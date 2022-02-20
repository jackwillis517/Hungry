// Connects to mongoDB database via mongoose
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // Connect via connection string in .env file
        const conn = await mongoose.connect(process.env.MONGO_URI)
        // Log if connected or if there's an error
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB