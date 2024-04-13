import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = ({ showMenu }) => {
    return (
        <nav className={`menu ${showMenu && 'show'}`}>
            <div className={`menu-left ${showMenu && 'show'}`}>
                <div className={`portrait ${showMenu && 'show'}`} />
            </div>
            <ul className={`menu-right nav-list ${showMenu && 'show'}`}>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className={`menu-link ${showMenu && 'show'}`}>
                        <Link to="/" className='menu-link'>Home</Link>
                    </p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className={`menu-link ${showMenu && 'show'}`}>
                        <Link to="/about-me" className='menu-link'>About Me</Link>
                    </p>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;