import React from 'react';
import styles from './CurrentSong.module.css';

const CurrentSong = () => {
  return (
    <div className={styles.MainNewSongCont}>
      <button className={styles.newButton}>Click to listen to NEW_SONG</button>
      <img className={styles.MickiImg} src='data:image/jpeg;base64,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' alt='NEW_SONG' />
    </div>
  );
};

export default CurrentSong;
