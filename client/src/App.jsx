import React, { useState } from 'react';
import {io} from 'socket.io-client'
import './App.css';

function App() {
    const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');

  const handleSendMessage = (e) => {
   
  };

  const handleJoinRoom = (e) => {
   
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col p-6 bg-white rounded shadow-lg w-1/3">
        <h1 className="text-3xl font-extrabold mb-4 text-center">CHAT APP</h1>
          <form onSubmit={handleSendMessage}>
        <div className="flex space-x-4 mb-4">
            <input
              className="flex-grow border p-2 rounded"
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}/>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
              Send
            </button>
          </div>
        </form>
         <form onSubmit={handleJoinRoom}>
          <div className="flex space-x-4 mb-4">
            <input
              className="flex-grow border p-2 rounded"
              type="text"
              placeholder="Join room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
              Join
            </button>
          </div>
        </form>
      </div>
      <div className="flex-grow bg-gray-200 p-4 rounded ml-4">
        <p className='text-right font-bold text-lg'>hello</p>

      </div>
    </div>
  );
}

export default App;
