import React, { useState } from 'react';
import Logo from './Logo'; // Import your Logo component here

function App() {
  const [login, setLogin] = useState(true);

  const loginSwitch = () => {
    setLogin(!login);
  }

  const handleSignIn = () => {
    // Redirect to the Instagram login page
    window.location.href = 'https://www.instagram.com/accounts/login/';
  }

  return (
    <div id='Container'>
      <div id="user">
        <Logo />
        {login ? (
          <>
            <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
            <input type="text" name="" id="" placeholder='Password' />
          </>
        ) : (
          <>
            <input type="text" name="" placeholder='Mobile Number or Email' id="" />
            <input type="text" name="" placeholder='Full Name' id="" />
            <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
            <input type="text" name="" id="" placeholder='Password' />
          </>
        )}
        <button onClick={handleSignIn}>{login ? "Sign in" : "Sign up"}</button>
        <div id='footer'>
          {login ? "Don't have an account?" : "Have an account?"} <span onClick={loginSwitch}>{login ? "Sign up" : "Log in"}</span>
        </div>
      </div>  
    </div>
  );
}

export default App;
