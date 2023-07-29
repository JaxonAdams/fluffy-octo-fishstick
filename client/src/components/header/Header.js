import React, { useState } from 'react';

import { HouseFill } from 'react-bootstrap-icons';

import './Header.css';

const Header = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='header'>
      <a className='a-nostyle' href='/'>
        <HouseFill className='title header-title' />
      </a>
      <div className={`menu-btn ${showMenu && 'close'}`} onClick={() => toggleMenu()}>
        <div className='btn-line' />
        <div className='btn-line' />
        <div className='btn-line' />
      </div>
    </header>
  );
};

export default Header;