import React from 'react';
import styles from './Music.module.css';

const Music = () => {
  return (
    <section id='Music' className={styles.AboutContainer}>
      <h1 className={styles.About}>Music</h1>
      <div className={styles.AboutList}>
        <div className={styles.AboutText}>
          <p>Music Coming Soon, Stay Tuned!</p>
        </div>
      </div>
    </section>
  );
};

export default Music;
