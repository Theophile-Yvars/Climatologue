import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScenePierro from './ScenePierro';

const router = createBrowserRouter([
  {
    path: "/scenePierro",
    element: <div>Hello world Pierro!</div>,
  },
  {
    path: "/sceneGeorge",
    element: <ScenePierro />
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
