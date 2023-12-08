import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScenePierro from './scenePierro/ScenePierro';
import SceneGeorge from "./sceneGeorge/SceneGeorge";


const router = createBrowserRouter([
  {
    path: "/scenePierro",
    element: <ScenePierro />,
  },
  {
    path: "/sceneGeorge",
    element: <SceneGeorge/>
  },
]);

function App() {
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
