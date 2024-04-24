import React from 'react';
import { useNavigate }

function Home(props) {
  const { email, loggedIn, setLoggedIn } = props;
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <div className={titleContainer}>
      <h1>Welcome!</h1>
      </div>

    <div className={buttonContainer}>
    <input
    className={'inputButton'}
    type="button"
    onClick={handleButtonClick}
    value={'To Do App Log In'} />
    {loggedIn ? <div>Your email address is {email}</div> : <div />}
    </div>
    </div>
  );
}

export default Home;
