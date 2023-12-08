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

  const [indiceLeft, setIndiceLeft] = useState(4);

  const [carAlreadyShown, setCarAlreadyShown] = useState(false);
  const [cochonAlreadyShown, setCochonAlreadyShown] = useState(false);
  const [usineAlreadyShown, setUsineAlreadyShown] = useState(false);
  const [arbreAlreadyShown, setArbreAlreadyShown] = useState(false);

  function test(b) {
    setIsVisible(b)
  }

  
  function playCar(e ) {
    const clickAudio = new Audio(klaxon);
    clickAudio.play();
    setShowDivCar(true);
    setShowDivCochon(false);
    setShowDivUsine(false);
    setShowDivArbre(false);
    
    if(!carAlreadyShown)
      setIndiceLeft(indiceLeft-1);
    setCarAlreadyShown(true);
    
  }
  
  function playArbre(e ) {
    const clickAudio = new Audio(tronconneuse);
    clickAudio.play();
    setShowDivCar(false);
    setShowDivCochon(false);
    setShowDivUsine(false);
    setShowDivArbre(true);

    if(!arbreAlreadyShown)
      setIndiceLeft(indiceLeft-1);
    setArbreAlreadyShown(true)
    
  }
  
  function playCochon(e ) {
    const clickAudio = new Audio(cochon);
    clickAudio.play();
    setShowDivCar(false);
    setShowDivCochon(true);
    setShowDivUsine(false);
    setShowDivArbre(false);

    if(!cochonAlreadyShown)
      setIndiceLeft(indiceLeft-1);
    setCochonAlreadyShown(true);
  
  }
  
  function playUsine(e ) {
    const clickAudio = new Audio(sifflet);
    clickAudio.play();
    setShowDivCar(false);
    setShowDivCochon(false);
    setShowDivUsine(true);
    setShowDivArbre(false);

    if(!usineAlreadyShown)
      setIndiceLeft(indiceLeft-1);
    setUsineAlreadyShown(true)
  
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
    
      const randomAudio = new Audio(audioFiles[randomIndex]);
      randomAudio.play();
  }

    function testLimit(){
      console.log(indiceLeft)
      if(indiceLeft===0) {
        window.location.href = '/sceneGeorge';
      }
    }


  
    

    return (
      <>

        <div style={{ display: 'none' }}>
      <H5AudioPlayer
      autoPlayAfterSrcChange={true}
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
          <button onClick={() => test(false)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>Play !</button>
        </div>
      )}
        

        
{showDivCar && (
        <div className="carExplained" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
        <h1>Impact du Transport sur le Climat</h1>
  <p>Le transport joue un rôle majeur dans le changement climatique. Les émissions provenant des véhicules motorisés, tels que les voitures, les camions et les avions, contribuent significativement aux gaz à effet de serre. Ces émissions comprennent notamment le dioxyde de carbone (CO2), un gaz responsable du réchauffement climatique.</p>
  <p>De plus, le transport de marchandises à grande échelle, notamment par voie maritime, génère également des émissions considérables. Les activités de transport ont un impact non seulement sur la qualité de l'air, mais aussi sur le réchauffement global de la planète, ce qui nécessite des efforts pour développer des solutions durables et moins polluantes.</p>
  <p>La transition vers des modes de transport plus respectueux de l'environnement, tels que les véhicules électriques, les transports en commun efficaces, et la réduction des distances parcourues, sont des éléments cruciaux pour atténuer l'impact négatif du transport sur le climat.</p>
  
        <button onClick={() => {setShowDivCar(false);
        testLimit();}} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>Close</button>
        </div>
      )}

{showDivArbre && (
        <div className="arbreExplained" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
        <h1>Conséquences de la Déforestation sur le Réchauffement Climatique</h1>
  <p>La déforestation a un impact majeur sur le climat de la Terre. L'abattage massif des arbres, principalement pour la conversion des terres forestières en zones agricoles, urbaines ou industrielles, entraîne une diminution significative des forêts dans le monde.</p>
  <p>Les arbres absorbent le dioxyde de carbone (CO2) de l'atmosphère et stockent ce carbone, aidant ainsi à réguler le climat. La déforestation libère ce carbone stocké dans les arbres sous forme de CO2, contribuant ainsi à l'augmentation des gaz à effet de serre dans l'atmosphère.</p>
  <p>En plus de libérer du CO2, la déforestation conduit à la perte de biodiversité, à la destruction des habitats naturels pour de nombreuses espèces animales et végétales, ainsi qu'à une augmentation de l'érosion des sols et des risques d'inondations.</p>
  <p>Pour atténuer les effets néfastes de la déforestation, il est crucial de promouvoir la reforestation, de préserver les forêts existantes, de développer des pratiques agricoles durables et de promouvoir une exploitation forestière responsable.</p>
        <button onClick={() => {setShowDivArbre(false);
        testLimit();}} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>Close</button>
        </div>
      )}
      {showDivUsine && (
        <div className="usineExplained" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
        <h1>Conséquences de l'Industrialisation sur le Réchauffement Climatique</h1>
  <p>L'industrialisation a joué un rôle majeur dans l'augmentation des émissions de gaz à effet de serre, entraînant des conséquences dramatiques sur le climat de notre planète. Les industries, en particulier celles utilisant des combustibles fossiles, libèrent d'énormes quantités de dioxyde de carbone (CO2) et d'autres gaz à effet de serre dans l'atmosphère.</p>
  <p>Ces émissions massives contribuent à l'effet de serre, piégeant la chaleur du soleil et provoquant le réchauffement climatique. Les conséquences de ce phénomène incluent la fonte des calottes glaciaires, l'élévation du niveau des mers, l'augmentation des événements météorologiques extrêmes tels que les tempêtes et les sécheresses, ainsi que des perturbations graves dans les écosystèmes naturels.</p>
  <p>En outre, l'industrialisation intensive a également entraîné une déforestation massive pour répondre aux besoins en matières premières et à l'expansion des zones industrielles. Cette déforestation contribue à la perte de biodiversité, à l'érosion des sols et à la libération de dioxyde de carbone stocké dans les arbres, amplifiant ainsi le changement climatique.</p>
  <p>Il est crucial de prendre des mesures significatives pour réduire les émissions industrielles, investir dans des technologies propres et durables, ainsi qu'adopter des pratiques respectueuses de l'environnement afin de limiter les effets néfastes de l'industrialisation sur notre climat et notre planète.</p>
        <button onClick={() => {setShowDivUsine(false);
        testLimit();}} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>Close</button>
        </div>
      )}
      {showDivCochon && (
        <div className="cochonExplained" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
        <h1>Conséquences de l'Élevage Intensif sur le Réchauffement Climatique</h1>
  <p>L'élevage intensif a un impact significatif sur le réchauffement climatique. Les pratiques d'élevage massives, en particulier dans l'industrie de la viande, génèrent d'importantes émissions de gaz à effet de serre contribuant au changement climatique.</p>
  <p>Les animaux d'élevage, tels que les vaches et les moutons, produisent du méthane, un gaz à effet de serre beaucoup plus puissant que le dioxyde de carbone (CO2). Les déchets animaux et la gestion des déchets dans les élevages contribuent également aux émissions de gaz à effet de serre, aggravant ainsi le problème du réchauffement climatique.</p>
  <p>En plus des émissions de gaz, l'élevage intensif nécessite d'importantes ressources en eau, en alimentation pour les animaux, ainsi que des terres agricoles pour leur élevage et leur nourriture. Cette demande accrue en ressources conduit à la déforestation, à la perte de biodiversité et à une utilisation excessive des terres, exacerbant les problèmes environnementaux.</p>
  <p>Il est essentiel d'explorer des méthodes d'élevage plus durables et respectueuses de l'environnement, telles que l'agriculture biologique, l'élevage en pâturage et la réduction de la consommation de produits issus de l'élevage intensif, afin de réduire l'impact néfaste de l'élevage sur le climat et l'environnement.</p>
        <button onClick={() => {setShowDivCochon(false);
        testLimit();}} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>Close</button>
        </div>
      )}


      </>
      
    );
  }
  
  export default ScenePierro;