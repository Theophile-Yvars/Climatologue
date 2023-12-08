import React, { useState } from 'react';

import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import imgScenePierro from "../res/img/scenePierro.png"
import imgScenePierroDialog from "../res/img/scenePierroDialog.png"
import music from "../res/music/musicPierro.mp3"
import miaulement1 from "../res/music/chat/miaulement1.mp3"
import miaulement2 from "../res/music/chat/miaulement2.mp3"
import miaulement3 from "../res/music/chat/miaulement3.mp3"
import click from "../res/music/soundClick.mp3"
import blabla from "../res/music/blabla.mp3"
import "./scenePierro.css"

function ScenePierro() {

  const [backgroundImage, setBackgroundImage] = useState(imgScenePierro);

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function playClick(){
    const clickAudio = new Audio(click);
    clickAudio.play()
  }
  
  function playCar(e ) {
    playClick()
  }
  
  function playArbre(e ) {
    playClick()
  }
  
  function playCochon(e ) {
    playClick()
  }
  
  function playUsine(e ) {
    playClick()
  }
  
  function playClimatosceptique(e ) {
    const blablaAudio = new Audio(blabla);
    blablaAudio.play()
    setBackgroundImage(imgScenePierroDialog);
    setTimeout(() => {
      setBackgroundImage(imgScenePierro);
    }, 5000); 
  }
  
  function playChat(e ) {
    const audioFiles = [
      miaulement1, miaulement2, miaulement3
    ];
  
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    console.log(audioFiles[randomIndex])
      const randomAudio = new Audio(audioFiles[randomIndex]);
      randomAudio.play();
  }

    return (
      <>

        <div style={{ display: 'none' }}>
      <H5AudioPlayer
        autoPlay={true}
        loop={true}
        src={music}
        onPlay={e => console.log("onPlay")}
      />
      </div>
      <div className="ScenePierro">
      <img src={backgroundImage} alt="scenePierro" />
        <div className="clickable-area" style={{ top: '10%', left: '13%', width: '15%', height: '10%' }} onClick={(e) => playCar(e, 'Voiture')} > </div>
        <div className="clickable-area" style={{ top: '20%', left: '33%', width: '11%', height: '14%' }} onClick={(e) => playArbre(e, 'Arbre')} > </div>
        <div className="clickable-area" style={{ top: '53%', left: '35%', width: '18%', height: '15%' }} onClick={(e) => playCochon(e, 'Cochon')} />
        <div className="clickable-area" style={{ top: '28%', left: '77%', width: '16%', height: '15%' }} onClick={(e) => playUsine(e, 'Usine')} />
        <div className="clickable-area" style={{ top: '40%', left: '6%', width: '16%', height: '50%' }} onClick={(e) => playClimatosceptique(e, 'humain chiant et con')} />
        <div className="clickable-area" style={{ top: '70%', left: '77%', width: '16%', height: '30%' }} onClick={(e) => playChat(e, 'chat')} />
      </div>

      {isVisible && (
        <div className="gameExplaination" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'white', padding: '20px' }}>
          <button onClick={toggleVisibility}>Hide Div</button>
          <p>This is the centered div</p>
        </div>
      )}
      </>
      
    );
  }
  
  export default ScenePierro;