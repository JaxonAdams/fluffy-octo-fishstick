// WIP -- to be updated
import React from 'react';

import { HouseFill } from 'react-bootstrap-icons';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <a className='a-nostyle' href='/'>
        <HouseFill className='title header-title' />
      </a>
    </header>
  );
};

export default Header;