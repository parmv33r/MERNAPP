const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try{
        // Get token from request header
        const token = req.header('Authorization')?.replace('Bearer ', '')

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' })
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // Add user to request
        req.user = decoded

        next()
    } catch (error) {
        console.error('Auth middleware error:', error)
        res.status(401).json({ message: 'Token is not valid' })
    }
}

module.exports = authMiddleware