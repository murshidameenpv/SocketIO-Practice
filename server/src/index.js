import { create } from "domain";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const PORT = 3000;
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
    origin: "http://localhost:5173"
    },
    pingTimeout: 60000,
    
})
app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});


io.on('connection', socket => {
    console.log(socket.id)
})




httpServer.listen(PORT, () => {
   console.log(`Server is listening on http://localhost:${PORT}`); 
})