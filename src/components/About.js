import React from 'react';
import styles from './About.module.css';

const About = () => {
  
  return (
    <>
      <h1 className={styles.About}>ABOUT</h1>
      <div className={styles.AboutList}>
        <div className={styles.AboutText}>
          <h2>Michelle Gillman</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img src='https://i.insider.com/5e36f8e1ab49fd547e54ede3?width=900&format=jpeg&auto=webp' className={styles.Michelle} alt='Micki-XO'/>
      </div>
    </>
  );
};

export default About;
