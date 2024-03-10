import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

    return (
        <header>
            <h1>Route Parameters Demo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user/123">User Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;