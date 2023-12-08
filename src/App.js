import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScenePierro from './scenePierro/ScenePierro';
import SceneGeorge from "./sceneGeorge/SceneGeorge";
import SceneGeorgeJeux from "./sceneGeorge/SceneGeorgeJeux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScenePierro />,
  },
  {
    path: "/sceneGeorge",
    element: <SceneGeorge/>
  },
  {
    path: "/sceneGeorgeJeux",
    element: <SceneGeorgeJeux/>
  }
]);

function App() {
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
