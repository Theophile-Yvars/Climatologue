
import imgScenePierro from "../res/img/scenePierro.png"
import "./scenePierro.css"

function handleClick(e, area1) {
  console.log("click on : " + area1)
}

function ScenePierro() {
    return (
      <div className="ScenePierro">
        <img src={imgScenePierro} alt="scenePierro" />
        <div className="clickable-area" style={{ top: '18%', left: '10%', width: '18%', height: '10%' }} onClick={(e) => handleClick(e, 'Voiture')} > </div>
        <div className="clickable-area" style={{ top: '29%', left: '33%', width: '11%', height: '10%' }} onClick={(e) => handleClick(e, 'Voiture')} > </div>
        <div className="clickable-area" style={{ top: '50%', left: '60%', width: '15%', height: '5%' }} onClick={(e) => handleClick(e, 'Area 2')} />
      </div>
    );
  }
  
  export default ScenePierro;