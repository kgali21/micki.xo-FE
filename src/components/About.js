/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './About.module.css';
import Subscribe from './Subscribe';

const About = () => {
  return (
    <section id='About' className={styles.AboutContainer} >
      <div className={styles.AboutList}>
        <div className={styles.AboutText}>
          <h1 className={styles.About}>ABOUT</h1>
          <p className={styles.AboutBio}>Micki XO is a unique, yet relatable, force in the pop world that is always looking for her next adventure. She dreams of traveling the world while connecting with people through her lyrics, especially after her own bliss and sanity were saved by music. Her biggest hope is that the music she creates will inspire and/or help other people who are battling their own demons. That's why it's important to her that every song tells a story, even when it's not an easy story to tell. 
          2020 was a tumultuous year for everyone, but it was also a turning point for Micki XO, which led her to share her first story with the world through her debut single "Why Did I Stay?" What's next for this up-and-coming, pop artist? Follow along to find out!</p>
          <Subscribe />
        </div>
      </div>
    </section>
  );
};

export default About;
