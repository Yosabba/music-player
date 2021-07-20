import React, { useState } from 'react';
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

  return (
    <div className="App">
      <Nav setShowLibary={setShowLibary} showLibary={showLibary}/>
      <Song currentSong={currentSong} />
      <Player 
      currentSong={currentSong} 
      isPlaying={isPlaying} 
      setIsPlaying={setIsPlaying}
      />

      <Libary songs={songs} showLibary={showLibary}/>
      
    </div>
  );
}

export default App;
