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


io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('send-message', (data) => {
        console.log(data);
        io.emit("message-received", data)
    })
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});


app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});






httpServer.listen(PORT, () => {
   console.log(`Server is listening on http://localhost:${PORT}`); 
})