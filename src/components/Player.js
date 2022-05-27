import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  setSong,
  songs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  songRef,
}) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const newSongs = songs.map((song) => {
    if (song.id === songs.id) {
      return {
        ...song,
        active: true,
      };
    } else {
      return {
        ...song,
        active: false,
      };
    }
  });

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    songRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSong(newSongs);

    if (isPlaying) {
      const isplayProm = songRef.current.play();

      if (isplayProm !== undefined) {
        isplayProm.then((audio) => {
          songRef.current.play();
        });
      }
    }
  };

  const handleClick = () => {
    if (!isPlaying) {
      songRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      songRef.current.pause();
      setIsPlaying(!isPlaying);
    }

    setSong(newSongs);
  };

  const songEndHandler = async () => {
    const x = songs.findIndex((ind) => ind.id === currentSong.id);
    await setCurrentSong(songs[x + 1] || songs[0]);

    songRef.current.play();
  };

  const changeSong = async (direction) => {
    const songIndex = songs.findIndex((ind) => ind.id === currentSong.id);

    if (direction === "skip") {
      await setCurrentSong(songs[songIndex + 1] || songs[0]);
      activeLibraryHandler(songs[songIndex + 1] || songs[0]);
    } else if (direction === "back") {
      await setCurrentSong(songs[songIndex - 1] || songs[songs.length - 1]);
      activeLibraryHandler(songs[songIndex - 1] || songs[songs.length - 1]);
    }

    if (isPlaying) songRef.current.play();
  };

  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <section className="player">
      <div className="timecontrol">
        <p>{formatTime(songInfo.currentTime)}</p>

        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />

        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>

      <div className="icon-container">
        <FontAwesomeIcon
          onClick={() => changeSong("back")}
          icon={faChevronLeft}
          size="2x"
        />
        <FontAwesomeIcon
          className="play-pause"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
          onClick={handleClick}
          size="2x"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => changeSong("skip")}
          size="2x"
        />
      </div>

      <audio
        onTimeUpdate={timeUpdate}
        ref={songRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdate}
        onEnded={songEndHandler}
      ></audio>
    </section>
  );
};

export default Player;
