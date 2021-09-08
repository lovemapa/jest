const express = require('express')
const dotenv = require('dotenv')
const http = require('http')
const app = express()
const postRouter = require('./router/post')
const mongoose = require('mongoose');
require('babel-register')
require("babel-core/register");

dotenv.config()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const { MONGO_DB_CONNECT, JWT_TOKEN_EXPIRES_IN } = process.env;


if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(MONGO_DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}


app.get('/', (req, res) => {
    res.json({ status: true })
});

app.use('/post', postRouter)


module.exports = app