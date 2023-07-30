import React from 'react';

import { HouseFill } from 'react-bootstrap-icons';

import './Header.css';

const Header = ({ showMenu, setShowMenu }) => {

  return (
    <header className={`header ${showMenu && 'sticky'}`}>
      <a className='a-nostyle' href='/'>
        <HouseFill className='title header-title' />
      </a>
      <div className={`menu-btn ${showMenu && 'close'}`} onClick={() => setShowMenu(!showMenu)}>
        <div className='btn-line' />
        <div className='btn-line' />
        <div className='btn-line' />
      </div>
    </header>
  );
};

export default Header;