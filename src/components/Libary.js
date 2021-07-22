import React from 'react';
import LibarySongs from './LibarySongs';
import logo from '../sound-waves.svg';


const Libary = ({ songs, showLibary, setCurrentSong, songRef, isPlaying, currentSong, setSong }) => {

    return (
        <div className={showLibary ? "Libary-hidden" : "Libary" }>
            <div className="container">
                <img src={logo} alt="" />
                <h1>Library</h1>
            </div>
            
            {songs.map((song,index) => <LibarySongs 
            key={index} 
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            songRef={songRef}
            isPlaying={isPlaying}
            currentSong={currentSong}
            setSong={setSong}
            />)} 
        </div>
    );
}

export default Libary;