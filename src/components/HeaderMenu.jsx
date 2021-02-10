import React from 'react';
import '../assets/css/main.css';
import HeaderMenuItems from './HeaderMenuItems'
import HamburgerMenu from './HamburgerMenu'

const HeaderMenu = () => {
    return (
        <nav className="header__menu">
            <HeaderMenuItems />
            <HamburgerMenu />
        </nav>
    )
}

export default HeaderMenu