  
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ChatPage from './components/ChatPage'
import {io} from 'socket.io-client'
const END_POINT = "http://localhost:3000"
const socket = io(END_POINT)
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
       
    </Router>
  )
}
export default App
