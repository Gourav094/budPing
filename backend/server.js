const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
const messageRouter = require('./routes/message.route')

require('dotenv').config()

const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/chat')
.then(() => console.log('database connected'))

app.use(express.json())

app.use(cookieParser())

app.use('/user',authRouter)

app.use('/message',messageRouter)

app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})