import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.Links}>
          <HashRouter>
            <Link to='/#Home'>Home</Link>
            <Link to='/#New'>New</Link>
            <Link to='/#About'>About Us</Link>
            <img className={styles.MickiImg} src='/websitelogo.png' alt='NEW_SONG' />
            <Link to='/#Videos'>Subscribe</Link>
            <Link to='/#Music'>Music</Link>
            <Link to='/#Contact'>Contact</Link>
          </HashRouter>
        </div>
      </div>
      <img src='mainmicki.png' alt='micki' className={styles.MainMicki} />
    </>
  );
};

export default Header;
