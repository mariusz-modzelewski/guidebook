import React from 'react';
import '../assets/css/main.css';
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'

const Header = () => {
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderMenu />
        </header>
    )
}

export default Header


