import React, { useState, useRef } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Chillhop from './components/Util';
import Libary from './components/Libary';
import Nav from './components/Nav';



function App() {

  const [songs,setSong] = useState(Chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLibary, setShowLibary] = useState(true);
  const songRef = useRef(null);

  return (
    <main className="App">
      <Nav 
      setShowLibary={setShowLibary} 
      showLibary={showLibary}/>
      <Song 
      currentSong={currentSong} 
      />
      <Player
      setSong={setSong}
      songs={songs}
      setCurrentSong={setCurrentSong} 
      currentSong={currentSong} 
      isPlaying={isPlaying} 
      setIsPlaying={setIsPlaying}
      songRef={songRef}
      />

      <Libary 
      songs={songs} 
      setSong={setSong}
      showLibary={showLibary} 
      setCurrentSong={setCurrentSong}
      songRef={songRef}
      isPlaying={isPlaying}
      currentSong={currentSong}
      />
      
    </main>
  );
}

export default App;
