const mongoose = require('mongoose')

const Schema = mongoose.Schema


const postSchema = new Schema({


    title: String,
    description: String,
    author: String

})

module.exports = mongoose.model('post', postSchema)