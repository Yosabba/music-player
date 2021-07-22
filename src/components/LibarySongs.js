import React from 'react';


const LibarySongs = ({ song, setSong, setCurrentSong, songs, id, songRef, isPlaying, currentSong}) => {

    const handleClick = async () => {
        
        const playThis = songs.filter((max) => max.id === id);
        setCurrentSong(playThis[0])

        const newSongs = songs.map((song) => {
            if(song.id === id){
                return {
                    ...song, active: true,
                }
            } else {
                return {
                    ...song, active: false,
                }
            }
        });

        setSong(newSongs)

        if (isPlaying) {
            const isplayProm = await songRef.current.play();

            if (isplayProm !== undefined) {
                isplayProm.then((audio) => {
                    songRef.current.play();
                });
            }

            await songRef.current.play();

        }
        
    }

    return (
        <section onClick={handleClick} className={ song.active ? "Libary-songs-active" : "Libary-songs"}>
            <img src={song.cover} alt="" />
            <div className="song-info">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </section>
    );
}

export default LibarySongs;