import React from 'react';
import CurrentSong from './CurrentSong';
import styles from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <div className={styles.SocialMedia}>
      <nav className={styles.Mediabar}>
        <a href='https://www.instagram.com/mickixomusic/'>
          <img src='instagram.png' alt='Instagram' className={styles.OtherSMedia} />
        </a>
        <a href='https://soundcloud.com/mickixo'>
          <img src='soundcloud.png' alt='Soundcloud' className={styles.SMedia} />
        </a>
        <a href='https://open.spotify.com/artist/2UqmpmQDScS5rz5WsQaFCA?si=XXRKZ1vLTnWKomoOpb1bSA'>
          <img src='spotify.png' alt='Spotify' className={styles.SMedia} />
        </a>
        <a href='https://www.facebook.com/mickixo'>
          <img src='facebook.png' alt='Facebook' className={styles.OtherSMedia} />
        </a>
        <a href='https://www.youtube.com/channel/UCkdfFemPzv6hJD_e9UqHpnA'>
          <img src='youtube.png' alt='Youtube' className={styles.SMedia} />
        </a>
        <a href='https://twitter.com/mickixomusic'>
          <img src='newTwit.png' alt='Micki/s twitter' className={styles.Twitter} />
        </a>
        <a href='https://music.apple.com/us/artist/micki-xo/id1510659379'>
          <img src='appleMusic.png' alt='Apple Music' className={styles.OtherSMedia} />
        </a>
      </nav>
      <section className={styles.CurrentSong}>
        <CurrentSong />
      </section>
    </div>
  );
};

export default SocialMedia;
