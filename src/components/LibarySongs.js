import React from 'react';

const LibarySongs = ({ song }) => {

    return (
        <div className="Libary-songs">
            <img src={song.cover} alt="" />
            <h4>Artist</h4>
            <p>{song.artist}</p>
            <h4>Song</h4>
            <p>{song.name}</p>
        </div>
    );
}

export default LibarySongs;