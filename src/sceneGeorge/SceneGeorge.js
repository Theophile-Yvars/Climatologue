import imgSceneGeorge from "../res/img/sceneGeorge.png"
import './SceneGeorge.css'
import { Redirect } from 'react-router-dom';

function handleClick(e, area1) {
    console.log("click on : " + area1)
    window.location.href = '/sceneGeorgeJeux';
}

function SceneGeorge() {
    return (
        <>
            <div className="SceneGeorge">
                <img src={imgSceneGeorge} alt="scenePierro"/>
            </div>
            <div className="clickable-area" style={{ top: '10%', left: '14%', width: '42%', height: '38%' }} onClick={(e) => handleClick(e, 'Voiture')} > </div>

            <div className="SceneGeorge-Dialogue"></div>
        </>
    );
}

export default SceneGeorge;