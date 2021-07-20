import React from 'react';


const Song = ({ currentSong }) => {
    return (
        <div className="song">
            <img src={currentSong.cover} alt="" />
            <h1>Artist</h1>
            <p>{currentSong.artist}</p>
            <h2>Song</h2>
            <p>{currentSong.name}</p>
        </div>

    );
}


export default Song;