import React from 'react';
import styles from './Music.module.css';
import SpotifyPlayer from 'react-spotify-player';
import PropTypes from 'prop-types';

const Music = ({ uri }) => {
  

  return (
    <section className={styles.AboutContainer}>
      <SpotifyPlayer
        uri={uri}
      />
    </section>
  );
};

export default Music;

Music.propTypes = {
  uri: PropTypes.string.isRequired
};
