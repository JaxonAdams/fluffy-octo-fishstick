import React, { useEffect, useState } from 'react';
import './Hero.css'

import profile from '../../assets/jaxon.png';

const Hero = () => {
  // trigger animations when visible
  // otherwise, move elements away to trigger animations again
  const [slideIn, setSlideIn] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0   
    }
  
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setSlideIn(true ? entry.isIntersecting : false);
      });
    };

    const heroObserver = new IntersectionObserver(observerCallback, observerOptions);
  
    const target = document.getElementsByClassName('hero')[0];
    heroObserver.observe(target);
  }, [slideIn]);

  return (
    <div className='hero'>
      <div className={`hero-container container-left ${slideIn ? 'visible' : 'remove'}`}>
        <h3 className='subtitle'>Hello, my name is</h3>
        <h1 className='title hero-title'><span className='highlight-txt'>Jaxon</span> Adams</h1>
      </div>
      <div className={`hero-container container-right ${slideIn ? 'visible' : 'remove'}`}>
        <img className='profile-img' src={ profile } alt='Jaxon Adams' />
        <div className='profile-bg' />
      </div>
    </div>
  );
};

export default Hero;