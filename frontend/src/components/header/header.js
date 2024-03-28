import '../header/header.css';
import logo from '../../resources/logo.png';
import React from 'react';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Pomodoro Timer" className="logo" />
        </header>
    );
}

export default Header;