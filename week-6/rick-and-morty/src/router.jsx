import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import CharactersPage from "./pages/CharactersPage";
import ACharacter from "./pages/ACharacterPage";
import FavoritesPage from "./pages/FavoritesPage";
import ResultPage from "./pages/ResultPage";

const router = createBrowserRouter([

  {
    path: '/',
    element:<App/>,
    children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path:'about/',
          element: <AboutPage/>
        },
        {
          path:'characters/',
          element: <CharactersPage/>
        },
        {
          path:'character/:id/',
          element:<ACharacter/>
        },
        {
          path:'favorites/',
          element: <FavoritesPage/>
        },
        {
          path: "results/:name/",
          element: <ResultPage />
        }
    ],
    errorElement: <NotFoundPage/>


  },


]);

export default router;