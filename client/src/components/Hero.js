import React from 'react';

import profile from '../assets/jaxon.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-container container-left'>
        <h3 className='subtitle'>Hello, my name is</h3>
        <h1 className='title hero-title'><span className='highlight-txt'>Jaxon</span> Adams</h1>
      </div>
      <div className='hero-container container-right'>
        <img className='profile-img' src={ profile } alt='Jaxon Adams' />
        <div className='profile-bg' />
      </div>
    </div>
  );
};

export default Hero;