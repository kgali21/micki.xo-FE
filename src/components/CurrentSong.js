import React from 'react';
import styles from './CurrentSong.module.css';

const CurrentSong = () => {
  return (
    <div className={styles.MainNewSongCont}>
      <button className={styles.newButton}>CLICK TO LISTEN TO SILENCE</button>
    </div>
  );
};

export default CurrentSong;
