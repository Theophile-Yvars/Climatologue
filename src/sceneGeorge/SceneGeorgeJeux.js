import './SceneGeorgeJeux.css'
import imgSceneGeorgeJeux from "../res/img/map-monde.gif";
import georgeEtonne from '../res/img/GeorgeEtonne.png'

function SceneGeorgeJeux() {

    return (
        <>
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