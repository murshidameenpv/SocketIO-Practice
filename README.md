emit: Used to send an event to the client. You can emit to a specific client, to all clients, or to clients in a specific room.
on:    Used to listen for events emitted by the client.
join:    Allows a client to join a specific room.
leave:   Allows a client to leave a specific room.
to or in:    Used to send an event to a specific room.
disconnect:    Used to manually disconnect a client.
createServer: This function creates a new HTTP server. In this case, it’s used to attach the Socket.IO server to an HTTP server.

Server: This is the constructor for creating a new Socket.IO server. It takes the HTTP server as an argument and an options object where you can specify configuration options like CORS settings and timeouts.

cors: This option is used to configure Cross-Origin Resource Sharing (CORS). It allows you to specify which domains can connect to your Socket.IO server.

pingTimeout: This is the time in milliseconds that the server will wait for a ping response from the client before considering the connection closed.

io.on('connection', ...): This is an event listener that listens for new connections to the Socket.IO server. When a new client connects, the callback function is executed.

socket: This variable represents the connection to a single client. It’s passed to the callback function of the io.on('connection', ...) event listener.

socket.on('send-message', ...): This sets up an event listener on the client’s socket for a custom event named ‘send-message’. When the client emits this event, the callback function is executed.

socket.broadcast.emit: This method is used to emit an event to all clients except the sender. In this case, it’s emitting a ‘receive-message’ event with the message that was sent by the client.

httpServer.listen: This starts the HTTP server on the specified port, allowing clients to connect to it.
