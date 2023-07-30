import React from 'react';

import './Menu.css';

const Menu = ({ showMenu }) => {
    return (
        <nav className={`menu ${showMenu && 'show'}`}>
            <div className={`menu-left ${showMenu && 'show'}`}>
                <div className={`portrait ${showMenu && 'show'}`} />
            </div>
            <ul className={`menu-right nav-list ${showMenu && 'show'}`}>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className={`menu-link ${showMenu && 'show'}`}>Home</p>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;