const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Get single post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({message: 'Post not found'})
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
        })
        const savedPost = await post.save()
        res.status(201).json(savedPost)
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
})

// Update a post

router.put('/:id',async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        if(!post){
            return res.status(404).json({ message: 'Post not found'})
        }
        res.status(200).json(post)
    } catch (error){
        res.status(400).json({message:error.message})
    }
})

// Delete a post
router.delete('/:id', async (req, res) => {
    try {
        const post =  await Post.findByIdAndDelete(req.params.id)
        if(!post){
            return res.status(404).json({message: 'Post not found'})
        }
        res.status(200).json({message: 'Post deleted successfully'})
    } catch(error) {
        return res.status(500).json({message: error.message})
    }
})

module.exports = router
