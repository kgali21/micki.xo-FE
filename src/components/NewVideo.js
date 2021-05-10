import React from 'react';
import styles from './NewVideo.module.css';
import ReactPlayer from 'react-player';

const NewVideo = () => {
  const videoMsg = '"WHY DID I STAY?"';

  return (
    <section className={styles.VideoComponent}>
      <h1 className={styles.VideoTitle}>NEW VIDEO</h1>
      <section id='Video' className={styles.VideoContainer}>
        <ReactPlayer url='https://www.youtube.com/watch?v=sKGn3yj8GhE' controls={true} width='100%' height='50%' />
        <div className={styles.TextContainer}>
          <h1>{videoMsg}</h1>
          <h2>OFFICIAL LYRIC VIDEO</h2>
          <button className={styles.MickiButton}>MICKI XO YOUTUBE PAGE</button>
        </div>
      </section>
    </section>
  );
};

export default NewVideo;
