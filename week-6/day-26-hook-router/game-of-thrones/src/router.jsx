

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./main/HomePage";
import AboutPage from "./main/AboutPage";
import AllCharacter from "./main/AllCharacter";
import FavoritesPage from "./main/FavoritesPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      index: true,
      element: <HomePage/>,
      },
      {
        path:'about/',
        element:<AboutPage/>,
      },
      {
        path:'characters/',
        element:<AllCharacter/>,
      },
      {
        path:'favorites/',
        element:<FavoritesPage/>,
      }
    ]
  }
])

export default router;