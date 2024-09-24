import React, { useState } from 'react';
import bulbOn from './assets/bulb-on.png'
import bulbOff from './assets/bulb-off.png'
import clickSound from './assets/light-switch-sound.mp3' 

import './App.css'

const playSound =()=>{
  const audio = new Audio(clickSound);
  audio.play()
}

function App() {
  const [isLit, setIsLit] = useState(false)
  const toggleLight = () => {
    setIsLit(!isLit);
    playSound();

 
  };

  return (
    <div>
      <h1>This room is {isLit ? 'LIT' : 'DARK'}</h1>
      <img src={isLit ? bulbOn : bulbOff} alt="light bulb" />
      <div className={`switch ${isLit ? 'on' : ''}`} onClick={toggleLight}>
        <div className='switch-button'></div>
      </div>
      <input type="range" />
    </div>
  )
}

export default App;
