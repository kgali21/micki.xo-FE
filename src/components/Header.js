import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';
import styles from './Header.module.css';
import SocialMedia from './SocialMedia';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if(offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  console.log('scrolled', scrolled);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbar = ['navbar'];
  if(scrolled) {
    navbar.push('scrolled');
  }


  return (
    <div className={navbar.join(' ')}>
      <div className={styles.Header}>
        <div className={styles.Links}>
          <HashRouter>
            <Link to='/#Home'>Home</Link>
            <Link to='/#New'>New</Link>
            <Link to='/#About'>About Us</Link>
            <img className={styles.MickiImg} src='/websitelogo.png' alt='Micki XO' />
            <Link to='/#Videos'>Subscribe</Link>
            <Link to='/#Music'>Music</Link>
            <Link to='/#Contact'>Contact</Link>
          </HashRouter>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Header;
