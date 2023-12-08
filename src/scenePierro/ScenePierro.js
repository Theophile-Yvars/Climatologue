import React, { useState } from 'react';

import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import imgScenePierro from "../res/img/scenePierro.png"
import imgScenePierroDialog from "../res/img/scenePierroDialog.png"
import music from "../res/music/musicPierro.mp3"
import miaulement1 from "../res/music/chat/miaulement1.mp3"
import miaulement2 from "../res/music/chat/miaulement2.mp3"
import miaulement3 from "../res/music/chat/miaulement3.mp3"
import sifflet from "../res/music/sifflet.mp3"
import cochon from "../res/music/cochon.mp3"
import klaxon from "../res/music/klaxon.mp3"
import tronconneuse from "../res/music/tronconneuse.mp3"
import blabla from "../res/music/blabla.mp3"
import "./scenePierro.css"

function ScenePierro() {

  const [backgroundImage, setBackgroundImage] = useState(imgScenePierro);

  const [showDivCar, setShowDivCar] = useState(false);
  const [showDivCochon, setShowDivCochon] = useState(false);
  const [showDivUsine, setShowDivUsine] = useState(false);
  const [showDivArbre, setShowDivArbre] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const indiceLeft = 4;

  const [carAlreadyShown, setCarAlreadyShown] = useState(false);
  const [cochonAlreadyShown, setCochonAlreadyShown] = useState(false);
  const [usineAlreadyShown, setUsineAlreadyShown] = useState(false);
  const [arbreAlreadyShown, setArbreAlreadyShown] = useState(false);

  
  function playCar(e ) {
    const clickAudio = new Audio(klaxon);
    clickAudio.play();
    setShowDivCar(true);
    setShowDivCochon(false);
    setShowDivUsine(false);
    setShowDivArbre(false);
    
    if(!carAlreadyShown)
      indiceLeft-=1;
    setCarAlreadyShown(true)
  }
  
  function playArbre(e ) {
    const clickAudio = new Audio(tronconneuse);
    clickAudio.play();
    setShowDivCar(false);
    setShowDivCochon(false);
    setShowDivUsine(false);
    setShowDivArbre(true);

    if(!arbreAlreadyShown)
      indiceLeft-=1;
    setArbreAlreadyShown(true)
    
  }
  
  function playCochon(e ) {
    const clickAudio = new Audio(cochon);
    clickAudio.play();
    setShowDivCar(false);
    setShowDivCochon(true);
    setShowDivUsine(false);
    setShowDivArbre(false);

    if(!usineAlreadyShown)
      indiceLeft-=1;
    setUsineAlreadyShown(true)
  }
  
  function playUsine(e ) {
    const clickAudio = new Audio(sifflet);
    clickAudio.play();
    setShowDivCar(false);
    setShowDivCochon(false);
    setShowDivUsine(true);
    setShowDivArbre(false);
  }
  
  function playClimatosceptique(e ) {
    const blablaAudio = new Audio(blabla);
    blablaAudio.play()
    setBackgroundImage(imgScenePierroDialog);
    setTimeout(() => {
      setBackgroundImage(imgScenePierro);
    }, 2500); 
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

    console.log(isVisible)

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
        <div className="gameExplaination" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
          <p>Vous avez face à vous un climatosceptique qui soutient que le réchauffement climatique n'existe pas.</p>
          <p>Pour lui le climat à toujours changé.</p>
          <p>Trouvez les 4 causes du réchauffement climatique pour lui démontrer son erreur</p>
          <button onClick={toggleVisibility} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>Play !</button>
        </div>
      )}

{showDivCar && (
        <div className="carExplained" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
        <h1>Impact du Transport sur le Climat</h1>
  <p>Le transport joue un rôle majeur dans le changement climatique. Les émissions provenant des véhicules motorisés, tels que les voitures, les camions et les avions, contribuent significativement aux gaz à effet de serre. Ces émissions comprennent notamment le dioxyde de carbone (CO2), un gaz responsable du réchauffement climatique.</p>
  <p>De plus, le transport de marchandises à grande échelle, notamment par voie maritime, génère également des émissions considérables. Les activités de transport ont un impact non seulement sur la qualité de l'air, mais aussi sur le réchauffement global de la planète, ce qui nécessite des efforts pour développer des solutions durables et moins polluantes.</p>
  <p>La transition vers des modes de transport plus respectueux de l'environnement, tels que les véhicules électriques, les transports en commun efficaces, et la réduction des distances parcourues, sont des éléments cruciaux pour atténuer l'impact négatif du transport sur le climat.</p>
        <button onClick={toggleVisibility} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>Close</button>
      )}
      </>
      
    );
  }
  
  export default ScenePierro;