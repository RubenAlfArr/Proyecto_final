import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './style.css'
import Login from "./views/login/login";
import Home from "./views/home/home"
import Imc from "./views/imc/calculateImc"
import Calories from "./views/calories/calculateCalories"
import Nutrients from "./views/nutrients/nutrients"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/imc",
    element: <Imc />,
  },
  {
    path: "/calories",
    element: <Calories />,
  },
  {
    path: "/nutrients",
    element: <Nutrients />,
  },
 
]);

function App() {


  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
