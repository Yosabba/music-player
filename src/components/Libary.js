import React from 'react';
import LibarySongs from './LibarySongs';

const Libary = ({ songs, showLibary }) => {

    return (
        <div 
        className={showLibary ? "Libary" : "Libary-hidden"} 
        >
            {songs.map((song,index) => <LibarySongs key={index} song={song}/>)} 
        </div>
    );
}

export default Libary;