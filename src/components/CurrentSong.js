import React from 'react';
import styles from './CurrentSong.module.css';

const CurrentSong = () => {
  return (
    <div className={styles.MainNewSongCont}>
      <button className={styles.newButton}>Click to listen to $NEW_SONG</button>
    </div>
  );
};

export default CurrentSong;
