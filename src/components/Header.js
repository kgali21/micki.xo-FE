import React from 'react';
import PropTypes from 'prop-types'

const Header = ({instagram, spotify, youtube, soundcloud}) => {

    return (
        <>
            <img src={instagram} alt='Instagram Link' />
            <img src={spotify} alt='Spotify Link' />
            <img src={youtube} alt='Youtube Link' />
            <img src={soundcloud} alt='Soundcloud Link' />
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