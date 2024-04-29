import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const { email, loggedIn, setLoggedIn } = props;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="mainContainer h-screen bg-[#ccc5b9] flex flex-col items-center justify-center">
      <div className="titleContainer p-5 shadow-md rounded-md max-w-md bg-[#fffcf2] text-3xl">
        <h1 className="text-[#252422] mb-4 mt-4">Welcome To My ToDo!</h1>
      </div>

      <div className="buttonContainer">
        <input
          className="inputButton bg-[#eb5e28] rounded-md px-14 py-4 mt-14 text-white text-lg cursor-pointer hover:bg-[#d6492f]"
          type="button"
          onClick={handleButtonClick}
          value={'Log In ToDo'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Home;
