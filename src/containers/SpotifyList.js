import React, { useEffect, useState } from 'react';
import SpotifyCard from '../components/Music';
import styles from './SpotifyList.module.css';

const SpotifyDeck = () => {
  const [spotifyUriArray, setSpotifyUriArray] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [spotifyToken, setSpotifyToken] = useState('');
    
  useEffect(() => {
    fetch('http://localhost:3001/token')
      .then(res => res.json())
      .then(data => setSpotifyToken(data.body['access_token']));
      
    fetch('http://localhost:3001/micki')
      .then(res => res.json())
      .then(data => {
        setSpotifyUriArray(data.tracks);
      });
  }, []);

  console.log(spotifyUriArray, 'data array');
  

  const spotifyElements = spotifyUriArray.map(data => <SpotifyCard uri={data.uri} key={data.uri} />);

  return (
    <>
      <h1 id='Music' className={styles.MusicTitle}>MUSIC</h1>
      <ul className={styles.SpotifyContainer}>
        <li className={styles.ListItem}>
          {spotifyElements}
        </li>
      </ul>
    </>
  );
};

export default SpotifyDeck;
