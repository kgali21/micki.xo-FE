import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CurrentSong from './CurrentSong.js';
import Header from './Header.js';
import About from './About.js';
import styles from './Home.module.css';
import Fake from './Music.js';
import Subscribe from './Subscribe.js';
import SocialMedia from './SocialMedia.js';
import ContactMe from './ContactMeForm.js';

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.HeaderBackground}>
          <HashRouter>
            <Header />
            <Switch>
              <Route path='/#Home' component={Home} />
              <Route path='/#New' component={Fake} />
              <Route path='/#About' component={About} />
              <Route path='/#Videos' component={Fake} />
              <Route path='/#Music' component={Fake} />
              <Route path='/#Contact' component={Fake} />
            </Switch>
          </HashRouter>
        </div>
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
