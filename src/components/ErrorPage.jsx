import React from 'react';
import '../assets/css/main.css';

const ErrorPage = (props) => {
    return (
        <section className="error-page" >
            <h2>Nie znaleziono strony</h2>
            <img src="/img/404.png" alt="404 error" />
            <p>Link, który podałeś może być nie poprawny, lub strona została usunięta.</p>
        </section >
    )
}

export default ErrorPage