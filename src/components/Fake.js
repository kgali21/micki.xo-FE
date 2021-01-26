import React from 'react';
import styles from './About.module.css';

const Fake = () => {
  return (
    <section id='Fake'>
      <h1 className={styles.About}>New Music</h1>
      <div className={styles.AboutList}>
        <div className={styles.AboutText}>
          <p>Music Coming Soon, Stay Tuned!</p>
        </div>
      </div>
    </section>
  );
};

export default Fake;
