import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={styles.Micki}>Micki XO</h1>
      <div className={styles.Links}>
        <img src='../../public/insta.png' alt='Instagram' />
        <img src='../../public/spotify.png' alt='Spotify' />
        <img src='../../public/youtube.png' alt='Youtube' />
        <img src='../../public/soundcloud.png' alt='Soundcloud' />
      </div>
    </>
  );
};

export default Header;
