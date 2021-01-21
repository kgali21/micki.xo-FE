import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CurrentSong from './CurrentSong.js';
import Header from './Header.js';
import About from './About.js';
import styles from './Home.module.css';
import Fake from './Fake.js';

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <HashRouter>
          <Header />
          <Switch>
            <Route path='/#About' component={About} />
            <Route path='/#Fake' component={Fake} />
          </Switch>
        </HashRouter>
        <CurrentSong />
        <About className={styles.About} id='About'/>
        <Fake />
      </div>
    </>
  );
};

export default Home;
