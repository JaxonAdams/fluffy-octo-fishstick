import React, { useEffect } from 'react';
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';

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
        link: 'https://github.com/JaxonAdams',
        icon: <Github className='icon github' />,
        p: 'Check out my side projects!'
      },
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jaxon-adams-ba5743229/',
        icon: <Linkedin className='icon linkedin' />,
        p: 'Take a look at my work experience!'
      },
      {
        title: 'Instagram',
        link: 'https://www.instagram.com/jj_adams01/',
        icon: <Instagram className='icon instagram' />,
        p: 'Get to know me!'
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