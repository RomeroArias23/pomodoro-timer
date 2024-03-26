import React from 'react';
import '../header/header.css';
import logo from '/Users/diegoromero/Coding/pomodoro-timer/frontend/src/resources/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <button>
            <img src={logo} alt="logo" />
        </button>
        
        <h1 className='title'>Pomodoro Timer</h1>
      </div>
    </header>
  );
}

export default Header;