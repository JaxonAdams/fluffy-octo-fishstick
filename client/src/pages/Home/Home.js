import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';

import './Home.css';

import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import Hero from '../../components/hero/Hero';
import Hook from '../../components/hook/Hook';
import CardContainer from '../../components/card-container/CardContainer';
import Footer from '../../components/footer/Footer';

const Home = () => {
  // update page title
  useEffect(() => {
    document.title = 'Jaxon Adams - Home';
    fetch('/api/')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  // this will be used to open/close the menu
  const [showMenu, setShowMenu] = useState(false);

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
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} />
      <Hero />
      <Hook />
      <CardContainer contents={cardContainerCards} />
      <Footer />      
    </div>
  );
};

export default Home;