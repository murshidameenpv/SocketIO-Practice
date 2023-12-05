import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import fs from 'fs';



const app = express();
const PORT = 3000;
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
    origin: "http://localhost:5173  "
    },
    pingTimeout: 60000,
    
})

const rawData = fs.readFileSync('./src/db/messages.json');
const messageData = JSON.parse(rawData)




//socket
let users = [];
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('send-message', (data) => {
        console.log(data);
        io.emit("message-received", data)
    })
    socket.on("new-user", (data) => {
        console.log(data,"new");
        users.push(data)
        io.emit('all-users',users)
    })
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
         //Updates the list of users when a user disconnects from the server
        users = users.filter((user) => (user.socketId !== socket.id))
        io.emit('all-users', users)
        socket.disconnect()
    });
    socket.on("typing", (data) => {
        socket.broadcast.emit("typing-response",data)
    })
    socket.on('stop-typing', () => {
        socket.broadcast.emit("typing-response","")
    })
});


// io is the server instance that represents the Socket.IO server. When you use io.emit, it sends the event to all connected clients. This is typically used when you want to broadcast a message to all users.

// socket on the other hand, represents a specific client connection to the server. When you use socket.emit, it sends the event to the specific client that the socket represents. This is typically used when you want to send a message to a specific user or handle events from a specific user.

app.get('/', async (req, res) => {
    res.json(messageData)
});






httpServer.listen(PORT, () => {
   console.log(`Server is listening on http://localhost:${PORT}`); 
})