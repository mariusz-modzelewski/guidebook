import React from 'react';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';

const HeaderMenuItem = props => {
    const { link, name } = props;
    return (
        <li className="header__menu-item">
            <Link to={link} className="header__menu-link">{name}</Link>
        </li>
    )
}

export default HeaderMenuItem