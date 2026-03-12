const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Encrypt password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    // Create new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    })

    await user.save()

    // Generate JWT token
    const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )

    res.status(201).json({ 
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
     })
    } catch (error) {
    console.error('Error during registration:', error)
    res.status(500).json({ message: error.message})
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        //check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        // Check password
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        //generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.status(200).json({ 
            token,
            user: {
                id: user._id,
                Username: user.username,
                email: user.email,
            }
         })
    } catch (error) {
        console.error('Error during login:', error)
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
