import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import homeMusic from './assets/music/home_background.wav';

function App() {

    const[isPlaying, setIsPlaying] = useState(false);
    const audio = new Audio(homeMusic);

    //play it
    //no autoplay unless user interacts first
    //workaround add button, so if there is a click it starts playing
    //fix for better functionality later
    const togglePlay = () => {
      if(isPlaying){
        audio.pause();
      } else{
        audio.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    };

  return (
    <div className="App">
      <header className="App-header">
        <button className = "background-button" onClick={togglePlay}>
          {isPlaying ? 'off' : 'play'}
        </button>
      </header>
    </div>
  );
}

export default App;
