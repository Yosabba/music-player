import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    const songRef = useRef(null);

    const [songInfo,setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    function formatTime(time) {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    function dragHandler(e) {
        songRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})

    }

    function handleClick() {

        if (!isPlaying) {

            songRef.current.play();
            setIsPlaying(!isPlaying);
        } else {

            songRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    }

    const timeUpdate = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    }


    return (
        <div className="player">

            <div className="timecontrol"> 
                <p>{formatTime(songInfo.currentTime)}</p>

                <input 
                min={0} 
                max={songInfo.duration} 
                value={songInfo.currentTime} 
                type="range" 
                onChange={dragHandler}
                />

                <p>{formatTime(songInfo.duration)}</p>
                
            </div>

            <div>
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon className="play" icon={isPlaying ? faStop: faPlay} onClick={handleClick} />
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
    
            
            


            <audio 
            onTimeUpdate={timeUpdate} 
            ref={songRef} 
            src={currentSong.audio}
            onLoadedMetadata={timeUpdate}
            ></audio>

        </div>

    );
}


export default Player;