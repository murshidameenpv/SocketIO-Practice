import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col p-6 bg-white rounded shadow-lg w-1/3">
        <h1 className="text-3xl font-extrabold mb-4 text-center">CHAT APP</h1>
        <div className="flex space-x-4 mb-4">
          <input className="flex-grow border p-2 rounded" type="text" placeholder="Type a message" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </div>
        <div className="flex space-x-4 mb-4">
          <input className="flex-grow border p-2 rounded" type="text" placeholder="Join room" />
          <button className="bg-green-500 text-white px-4 py-2 rounded">Join</button>
        </div>
      </div>
      <div className="flex-grow bg-gray-200 p-4 rounded ml-4">
        <p className='text-right font-bold text-lg'>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </div>
  );
}

export default App;
