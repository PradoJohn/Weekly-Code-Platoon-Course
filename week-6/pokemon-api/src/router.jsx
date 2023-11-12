import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./components/HomePage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import Error404Page from "./pages/Error404Page.jsx";
import PokemonPage from "./pages/PokemonPage.jsx"
import MissingPokemonPage from "./components/MissingPokemonPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/team",
        element: <TeamPage/>
      },
      {
        path:"pokemon/:name",
        element: <PokemonPage/>
      },
      {
        path:"pokemonNotFound/:input",
        element: <MissingPokemonPage/>
      }
      
    ],
    errorElement: <Error404Page/>
  },
]);

export default router;
