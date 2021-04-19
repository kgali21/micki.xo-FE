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
            <Link to='/#Home'>HOME</Link>
            <Link to='/#New'>NEW</Link>
            <Link to='/#About'>ABOUT US</Link>
            <img className={styles.MickiImg} src='/websitelogo.png' alt='Micki XO' />
            <Link to='/#Video'>VIDEO</Link>
            <Link to='/#Music'>MUSIC</Link>
            <Link to='/#Contact'>CONTACT</Link>
          </HashRouter>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Header;
