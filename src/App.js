import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScenePierro from './scenePierro/ScenePierro';

const router = createBrowserRouter([
  {
    path: "/scenePierro",
    element: <ScenePierro />,
  },
  {
    path: "/sceneGeorge",
    element: <div>Hello world George!</div>
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
