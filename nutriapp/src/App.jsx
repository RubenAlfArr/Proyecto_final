import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './style.css'
import Login from "./views/login/login";
import Home from "./views/home/home"
import Imc from "./views/imc/calculateImc"
import Calories from "./views/calories/calculateCalories"
import Nutrients from "./views/nutrients/nutrients"
import Profile from "./views/profile/profile"
import Recipes from "./views/recipes/recipes"
import EditProfile from "./views/profile/editProfile";

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
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/edit",
    element: <EditProfile />,
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
