
import { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import PropTypes from 'prop-types';

const ChatPage = ({ socket }) => {  
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const messageListener = (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };
  socket.on("message-received", messageListener);
  // Clean up the event listener when the component unmounts
  return () => {
    socket.off("message-received", messageListener);
  };
  }, [socket])
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;


ChatPage.propTypes = {
  socket: PropTypes.object.isRequired,
};

