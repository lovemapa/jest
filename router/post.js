const express = require('express')
const Posts = require('../controllers/posts')

const post = new Posts()
const postRouter = express.Router()

//Routes
postRouter.post('/', post.createPost)
postRouter.get('/', post.getPosts)
postRouter.put('/:postId', post.updatePost)

module.exports = postRouter