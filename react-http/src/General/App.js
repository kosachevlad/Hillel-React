import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Popular from "../Popular/index";
import Battle from "../Battle/index";
import Results from "../Battle/Results";
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
        path: "/battle/results",
        element: <Results />,
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
