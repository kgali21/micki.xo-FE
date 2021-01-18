import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={styles.Micki}>Micki XO</h1>
      <Router>
        <div className={styles.Links}>
          <Link to='/home/#About'>About Us</Link>
          {/* <img src='../../public/insta.png' alt='Instagram' />
        <img src='../../public/spotify.png' alt='Spotify' />
        <img src='../../public/youtube.png' alt='Youtube' />
        <img src='../../public/soundcloud.png' alt='Soundcloud' /> */}
        </div>  
      </Router>
    </>
  );
};

export default Header;
