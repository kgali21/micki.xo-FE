import React from 'react';
import styles from './Header.module.css';

const Header = () => {

  return (
    <>
      <h1 className={styles.Micki}>Micki XO</h1>
      <div>
        <img src='../../public/insta.png' alt='Instagram Link' />
        <img src='../../public/spotify.png' alt='Spotify Link' />
        <img src='../../public/youtube.png' alt='Youtube Link' />
        <img src='../../public/soundcloud.png' alt='Soundcloud Link' />
      </div>
    </>
  );
};

export default Header;
