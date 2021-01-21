import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={styles.Micki}>Micki XO</h1>
      <HashRouter>
        <Link to='/#About'>About Us</Link>
        <Link to='/#Fake'>Fake</Link>
      </HashRouter>
    </>
  );
};

export default Header;
