
import { useEffect, useState,useRef} from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import PropTypes from 'prop-types';

const ChatPage = ({ socket }) => {  
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null)
  useEffect(() => {
    const messageListener = (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };
  socket.on("message-received", messageListener);
    // Clean up the event listener when the component unmounts
    // Cleaning up in useEffect is crucial for preventing memory leaks and other performance issues. When you set up an event listener or subscribe to a service in a useEffect, it’s important to return a cleanup function that removes the event listener or unsubscribes from the service when the component unmounts or before the effect runs again.
  return () => {
    socket.off("message-received", messageListener);
  };
  }, [socket])

  
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} lastMessageRef={lastMessageRef}/>
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;


ChatPage.propTypes = {
  socket: PropTypes.object.isRequired,
};

