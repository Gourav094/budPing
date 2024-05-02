const { Server} = require('socket.io')
const {createServer} = require('http')
const express = require('express')

const app = express()

const httpServer = createServer(app);

const io = new Server(httpServer,{
    cors:{
        origin: ["http://localhost:5173"],
		methods: ["GET", "POST"],
    }
})

io.on("connection",(socket) => {
    console.log("A user connected",socket.id)

    // create a room for user where get the data from frontend
    socket.on("setup",(userData) => {
        socket.join(userData._id)   // room joined with itself
        console.log("User joined room in itself",userData._id)
        socket.emit('connected')    // emit event to frontend
    })

    socket.on("join chat",(room) => {
        socket.join(room)
        console.log("user joined in the room",room)
    })

   socket.on("new message",(newMessage) => {
    console.log("message from backend sent to user",newMessage.chatId)
        socket.in(newMessage.chatId).emit("message received",newMessage.message)
   })

    socket.on("disconnect",() => {
        console.log("User is disconnected",socket.id)
    })
})


module.exports = {
    httpServer,
    app
}