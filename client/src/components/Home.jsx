import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types'

const Home = ({socket}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('new-user',{userName,socketId:socket.id})
    navigate('/chat');
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={!userName} className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;

Home.propTypes = {
  socket:propTypes.object.isRequired
}