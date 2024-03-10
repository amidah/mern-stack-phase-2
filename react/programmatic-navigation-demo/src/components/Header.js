import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

    return (
        <header>
            <h1>Programmatic Navigation Demo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Header;