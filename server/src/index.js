import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const PORT = 3000;
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
    origin: "http://localhost:5173  "
    },
    pingTimeout: 60000,
    
})
app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});


io.on('connection',  (socket) => {
   console.log(`Client connected: ${socket.id}`);
    socket.on('send-message', ({room,message}) => {
        // io.emit("receive-message", message)
        //when using emit ,it will send requests to all of its clients ,including the client that actually made first request
        if (room && room.trim()!=="") {
        io.to(room).emit("receive-message", message);
        } else {
              socket.broadcast.emit("receive-message", message); 
        }
    });
    socket.on('join-room', room => {

        socket.join(room)   
        socket.emit('room-joined',`You have joined the room ${room}`)
    })
});



httpServer.listen(PORT, () => {
   console.log(`Server is listening on http://localhost:${PORT}`); 
})