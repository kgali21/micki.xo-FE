import React from 'react';
import PropTypes from 'prop-types'

const Header = ({instagram, spotify, youtube, soundcloud}) => {

    return (
        <>
            <img src={instagram} alt='Instagram Link'></img>
            <img src={spotify} alt='Spotify Link'></img>
            <img src={youtube} alt='Youtube Link'></img>
            <img src={soundcloud} alt='Soundcloud Link'></img>
        </>
    )
}

Header.propTypes = {
    instagram: PropTypes.string.isRequired,
    spotify: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
    soundcloud: PropTypes.string.isRequired
}

export default Header;