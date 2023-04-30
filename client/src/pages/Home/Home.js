import React, { useEffect } from 'react';

import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Hook from '../../components/hook/Hook';
import CardContainer from '../../components/card-container/CardContainer';

const Home = () => {
  // update page title
  useEffect(() => {
    document.title = 'Jaxon Adams - Home';
  }, []);

  const cardContainerCards = {
    title: "Let's Connect!",
    cards: [
      {
        title: 'GitHub',
        p: 'Bla bla bla bla bla bla bla bla bla bla bla.'
      },
      {
        title: 'LinkedIn',
        p: 'Bla bla bla bla bla bla bla bla bla bla bla.'
      },
      {
        title: 'Instagram',
        p: 'Bla bla bla bla bla bla bla bla bla bla bla.'
      }
    ]
  }

  return (
    <div className='home'>
      <Header />
      <Hero />
      <Hook />
      <CardContainer contents={cardContainerCards} />
      {/* <div style={{height: '100vh'}} /> */}
    </div>
  );
};

export default Home;