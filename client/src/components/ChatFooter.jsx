import { useState } from "react";
import PropTypes from 'prop-types';
import { checkPageStatus } from "../utils/functions";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('send-message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
      // Emit an event indicating the user has stopped typing
      socket.emit('stop-typing');
      //
      checkPageStatus(message, localStorage.getItem("userName")) 
    }
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim()) {
      // Emit typing event only if the user has entered text
      socket.emit('typing', `${localStorage.getItem("userName")} is typing...`);
    } else {
      // Emit stop-typing event if the message input is cleared
      socket.emit('stop-typing');
    }
  };


  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={handleChange}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;

ChatFooter.propTypes = {
  socket: PropTypes.object.isRequired,
};
