import React, { useEffect } from 'react';

import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';

const Home = () => {
  // update page title
  useEffect(() => {
    document.title = 'Jaxon Adams - Home';
  }, []);

  return (
    <div className='home'>
      <Header />
      <Hero />
      <div style={{height: '1000px'}} />
    </div>
  );
};

export default Home;