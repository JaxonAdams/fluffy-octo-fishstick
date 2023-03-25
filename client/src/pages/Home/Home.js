import React, { useEffect } from 'react';

import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Hook from '../../components/hook/Hook';

const Home = () => {
  // update page title
  useEffect(() => {
    document.title = 'Jaxon Adams - Home';
  }, []);

  return (
    <div className='home'>
      <Header />
      <Hero />
      <Hook />
    </div>
  );
};

export default Home;