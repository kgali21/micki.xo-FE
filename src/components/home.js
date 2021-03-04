import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CurrentSong from './CurrentSong.js';
import Header from './Header.js';
import About from './About.js';
import styles from './Home.module.css';
import Fake from './Fake.js';
import Subscribe from './Subscribe.js';
import SocialMedia from './SocialMedia.js';
import ContactMe from './ContactMeForm.js';

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <HashRouter>
          <Header />
          <Switch>
            <Route path='/#About' component={About} />
            <Route path='/#Subscribe' component={Subscribe} />
            <Route path='/#Fake' component={Fake} />
          </Switch>
        </HashRouter>
        <SocialMedia />
        <CurrentSong />
        <About className={styles.About} id='About'/>
        <Subscribe />
        <Fake />
        <ContactMe />
      </div>
    </>
  );
};

export default Home;
