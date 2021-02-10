import React from 'react';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <div className="header__logo">
            <Link className="header__logo-link" to="/">
                <span className="header__brand-name">Interaktywny Przewodnik Miejski</span>
            </Link>
        </div>
    )
}

export default HeaderLogo


