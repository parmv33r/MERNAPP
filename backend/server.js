const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

//intialize dotenv to read env. files
dotenv.config()

//create express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())

// Routes
const postRoutes = require('./routes/postRoutes')
app.use('/api/posts'. postRoutes)

//test route
app.get('/', (req, res) => {
    res.send('Blog API is running!')
})

//connect MongoDb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected successfully!')
    // Start server only after db connects
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log('MongoDB connection failed:',error)
})