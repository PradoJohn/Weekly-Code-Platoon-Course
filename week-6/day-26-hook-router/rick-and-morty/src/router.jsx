

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllCharactersPage from "./pages/AllCharactersPage";
import ACharacterPage from "./pages/ACharacterPage";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>,
    children:[

      {
        index:true,
        element: <HomePage/>
      },
      {
        path:'characters/',
        element: <AllCharactersPage/>,
      },
      {
        path:'characters/:id/',
        element: <ACharacterPage/>,
      },
      {
        path:'about/',
        element: <AboutPage/>,
      },
      {
        path:'favorites/',
        element: <Favorites/>,
      },
    ]
  }


])

export default router;