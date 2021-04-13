import React, { useEffect, useState } from 'react';
import styles from './NewVideo.module.css';
import ReactPlayer from 'react-player';
import env from 'react-dotenv';
import { youtubeFetch } from '../data/services';

const NewVideo = () => {
  const [embededUrl, setEmbededUrl] = useState('');

  useEffect(() => {
    youtubeFetch(env.YOUTUBE_API)
      .then(data => {
        setEmbededUrl(data.items[0].player.embedHtml);
      })
      .then(stringData => JSON.parse(stringData));
  });

  const videoMsg = '"WHY DID I STAY?"';

  return (
    <section className={styles.VideoComponent}>
      <h1 className={styles.VideoTitle}>NEW VIDEO</h1>
      <section id='Video' className={styles.VideoContainer}>
        <ReactPlayer url='https://www.youtube.com/watch?v=sKGn3yj8GhE' controls={true} width='1120px' height='680px' />
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
