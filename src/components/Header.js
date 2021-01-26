import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <img className={styles.MickiImg} src='/websitelogo.png' alt='NEW_SONG' />
      <div className={styles.Links}>
        <HashRouter>
          <Link to='/#About'>About Us</Link>
          <Link to='/#Subscribe'>Subscribe</Link>
          <Link to='/#Fake'>Fake</Link>
        </HashRouter>
      </div>
    </>
  );
};

export default Header;
