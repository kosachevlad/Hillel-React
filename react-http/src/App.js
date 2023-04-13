import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Battle from "./Battle";
import Nav from "./Nav";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/battle",
        element: <Battle />,
      },
      {
        path: "*",
        element: <h1>Error</h1>,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
