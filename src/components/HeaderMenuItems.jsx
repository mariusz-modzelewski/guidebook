import React from 'react';
import '../assets/css/main.css';
import HeaderMenuItem from './HeaderMenuItem'

const HeaderMenuItems = () => {
    return (
        <ul className="header__menu-items">
            <HeaderMenuItem name="Instrukcja" link="/instruction" />
            <HeaderMenuItem name="Miejsca" link="/places" />
            <HeaderMenuItem name="Wydarzenia" link="/events" />
        </ul>
    )
}

export default HeaderMenuItems