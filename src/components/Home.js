import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const { email, loggedIn, setLoggedIn } = props;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!loggedIn) {
      navigate('/login');
    } else {
      setLoggedIn(false);
      navigate('/');
    }
  };

  return (
    <div className="mainContainer">
      <div className="">
        <h1>Welcome!</h1>
      </div>

      <div className="">
        <input
          className={'inputButton'}
          type="button"
          onClick={handleButtonClick}
          value={'To Do App Log In'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Home;
