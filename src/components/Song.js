import React from 'react';


const Song = ({ currentSong }) => {
    return (
        <section className="song">
            <img src={currentSong.cover} alt="" />
            <h1>{currentSong.name}</h1>
            <h2>Artist</h2>
            <p>{currentSong.artist}</p>
        </section>

    );
}


export default Song;