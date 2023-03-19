import React, { useEffect } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  // update page title
  useEffect(() => {
    document.title = 'Jaxon Adams - Home';
  }, []);

  return (
    <div className='home'>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;