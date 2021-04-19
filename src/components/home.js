import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import About from './About.js';
import styles from './Home.module.css';
import Fake from './Music.js';
import ContactMe from './ContactMeForm.js';
import News from './News.js';
import NewVideo from './NewVideo.js';
import SpotifyDeck from '../containers/SpotifyList.js';

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.HeaderBackground}>
          <HashRouter>
            <Header />
            <Switch>
              <Route path='/#Home' component={Home} />
              <Route path='/#New' component={News} />
              <Route path='/#About' component={About} />
              <Route path='/#Video' component={NewVideo} />
              <Route path='/#Music' component={Fake} />
              <Route path='/#Contact' component={Fake} />
            </Switch>
          </HashRouter>
        </div>
        <News />
        <About />
        <NewVideo />
        <SpotifyDeck />
        <ContactMe />
      </div>
    </>
  );
};

export default Home;
