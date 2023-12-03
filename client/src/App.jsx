import  { useEffect, useState } from 'react';
import {io} from 'socket.io-client'
import './App.css';

export default function App() {
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const END_POINT = "http://localhost:3000"
  const socket = io(END_POINT);
  
  useEffect(() => {
    const socket = io(END_POINT);
    
 },[])


  const handleSendMessage = (e) => {
   
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      <div className="flex flex-col p-6 bg-white rounded shadow-lg w-full lg:w-1/3">
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
        </form> */}
      </div>
      <div className="flex-grow bg-gray-200 p-4 rounded ml-4">
        <p className='text-right font-bold text-lg'>hello</p>

      </div>
    </div>
  );
}

