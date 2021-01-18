import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import CurrentSong from './CurrentSong.js';
import Header from './Header.js';
import About from './About.js';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <Header />
        <CurrentSong />
        <About className={styles.About} id={'About'}/>
      </div>
    </>
  );
};

export default Home;
