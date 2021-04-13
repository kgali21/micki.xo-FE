import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types';

const SongCard = ({ audioUrl, albumArt, artist, trackName }) => {

  return (
    <section>
      <div>
        <h1>{trackName}</h1>
        <h2>{artist}</h2>
        <AudioPlayer 
          src={audioUrl}
          autoPlay={false}
          showSkipControls={false}
          showJumpControls={false}
          timeFormat={false}
        />
      </div>
      <div>
        <img src={albumArt} alt={artist + ' - ' + trackName}/>
      </div>
    </section>
  );
};

export default SongCard;

SongCard.propTypes = {
  audioUrl: PropTypes.isString.required,
  albumArt: PropTypes.isString.required,
  artist: PropTypes.isString.required,
  trackName: PropTypes.isString.required
};
