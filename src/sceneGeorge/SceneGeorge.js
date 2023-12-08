import imgSceneGeorge from "../res/img/sceneGeorge.png"
import './SceneGeorge.css'
import { Redirect, useParams } from 'react-router-dom';
import React, {useState} from "react";
import blabla from "../res/music/blabla.mp3";
import imgScenePierroDialog from "../res/img/scenePierroDialog.png";
import imgScenePierro from "../res/img/scenePierro.png";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
function handleClick(e, area1) {
    console.log("click on : " + area1)
    window.location.href = '/sceneGeorgeJeux';
}

function SceneGeorge() {
    const [backgroundImage, setBackgroundImage] = useState(imgScenePierro);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const fin = queryParams.get('fin');
    const [isVisible, setIsVisible] = useState(true);


    // Vérifier si le paramètre 'fin' est défini à true


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
            {fin === 'true' ? (
                <div className="SceneGeorgeFin">
                    <strong>Les Climatosceptiques et la Quête de l'Information</strong> <br/><br/>
                    Dans le débat sur le changement climatique, il est souvent dit que les climatosceptiques manquent peut-être simplement d'informations cruciales pour retrouver la raison. Il est important de reconnaître que dans la complexité des données scientifiques et des opinions divergentes, la compréhension totale peut parfois échapper à certains
                    <br/><br/>
                    <strong>FIN</strong>
                    <br/><br/>
                    <strong>Créateur : </strong><br/>
                    Jules Prince <br/>
                    Théophile Yvars <br/>
                </div>
            ) : (
                <div className="SceneGeorgeFin"> "Un ou deux degrés de plus, ce n'est rien. Ce n'est pas grave... <br/> Regardons la map monde vous verrez bien" </div>
            )}

            <div className="SceneGeorge">
                <img src={imgSceneGeorge} alt="scenePierro"/>
            </div>
            <div className="clickable-area" style={{ top: '10%', left: '14%', width: '42%', height: '38%', cursor: 'pointer' }} onClick={(e) => handleClick(e, 'Voiture')} > </div>
            <div className="clickable-area" style={{ top: '30%', left: '20%', width: '16%', height: '65%', cursor: 'pointer'  }} onClick={(e) => playClimatosceptique(e, 'humain chiant et con')} />
        </>
    );
}

export default SceneGeorge;