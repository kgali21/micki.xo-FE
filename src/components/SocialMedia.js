import React from 'react';
import styles from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <section className={styles.Mediabar}>
      <img src='soundcloud.png' alt='soundcloud' className={styles.SMedia} />
      <img src='spotify.png' alt='spotify' className={styles.SMedia} />
      <img src='youtube.png' alt='youtube' className={styles.SMedia} />
    </section>
  );
};

export default SocialMedia;
