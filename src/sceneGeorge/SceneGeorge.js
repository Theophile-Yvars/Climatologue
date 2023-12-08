import imgSceneGeorge from "../res/img/sceneGeorge.png"
import './SceneGeorge.css'
import { Redirect } from 'react-router-dom';
import React, {useState} from "react";
import blabla from "../res/music/blabla.mp3";
import imgScenePierroDialog from "../res/img/scenePierroDialog.png";
import imgScenePierro from "../res/img/scenePierro.png";

function handleClick(e, area1) {
    console.log("click on : " + area1)
    window.location.href = '/sceneGeorgeJeux';
}

function SceneGeorge() {
    const [backgroundImage, setBackgroundImage] = useState(imgScenePierro);

    const [isVisible, setIsVisible] = useState(true);

    function playClimatosceptique(e ) {
        const blablaAudio = new Audio(blabla);
        blablaAudio.play()
        setBackgroundImage(imgScenePierroDialog);
        setTimeout(() => {
            setBackgroundImage(imgScenePierro);
        }, 5000);
    }

    return (
        <>
            <div className="SceneGeorge">
                <img src={imgSceneGeorge} alt="scenePierro"/>
            </div>
            <div className="clickable-area" style={{ top: '10%', left: '14%', width: '42%', height: '38%' }} onClick={(e) => handleClick(e, 'Voiture')} > </div>
            <div className="clickable-area" style={{ top: '30%', left: '20%', width: '16%', height: '65%' }} onClick={(e) => playClimatosceptique(e, 'humain chiant et con')} />
        </>
    );
}

export default SceneGeorge;