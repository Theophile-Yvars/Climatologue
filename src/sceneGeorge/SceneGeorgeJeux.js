import './SceneGeorgeJeux.css'
import imgSceneGeorgeJeux from "../res/img/map-monde.gif";
import georgeEtonne from '../res/img/GeorgeEtonne.png'
import button from '../res/img/back-button.png'
import blabla from "../res/music/blabla.mp3"
import imgScenePierroDialog from "../res/img/scenePierroDialog.png";
import imgScenePierro from "../res/img/scenePierro.png";

function SceneGeorgeJeux() {
// Fonction de gestion du clic sur le bouton de retour
    const handleBackButtonClick = () => {
        // Naviguer vers la page "/test"
        window.location.href = '/sceneGeorge?fin=true';
    };



    return (
        <>
            <div className="SceneGeorgeBackButton">
                <img src={button} alt="button"  onClick={handleBackButtonClick}/>
            </div>

            <div className="SceneGeorgeJeux">
                <img src={imgSceneGeorgeJeux} alt="scenePierro"/>
            </div>

            <div className="GeorgeEtonne">
                <img src={georgeEtonne} alt="scenePierro"/>
            </div>

            <div className="SceneGeorgeDiag">
                En 20 000 ans, 5°C supplémentaire ont fait fondre le glacier présent sur l'europe. <br/>
                Alors avec 1 ou 2 °C de plus nous aurions presque des deserts en France ...
            </div>
        </>
    );
}

export default SceneGeorgeJeux;