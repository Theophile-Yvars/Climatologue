import imgSceneGeorge from "../res/img/sceneGeorge.png"
import './SceneGeorge.css'

function SceneGeorge() {
    return (
        <>
            <div className="SceneGeorge">
                <img src={imgSceneGeorge} alt="scenePierro"/>
            </div>

            <div className="SceneGeorge-Dialogue"></div>
        </>
    );
}

export default SceneGeorge;