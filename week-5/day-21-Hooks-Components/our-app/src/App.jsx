// import App from "../../front-end-app/src/App";
import './App.css'
import Hangman from './pages/Hangman.jsx'
import Whackamole from './pages/Whackamole.jsx'
import MuteButton from './pages/MuteButton.jsx'
import Header from './Header.jsx'
import Pokemon from './pages/Pokemon.jsx'
import ToDoList from './pages/ToDoList.jsx'
import GuessingGame from './pages/GuessingGame.jsx'

function App(){
  let Content
  switch (window.location.pathname) {
    case '/':
      Content = Hangman
      break;
    case '/whackamole':
      Content = Whackamole
      break;
    case '/mute-button':
      Content = MuteButton
      break;
    case '/pokemon':
      Content = Pokemon
      break;
    case '/to-do-list':
      Content = ToDoList
      break;
    case '/guessing-game':
      Content = GuessingGame
      break;
    default:
      break;
      
  }

  return (
    <>
    <Header/>
    <Content/>
    </>
  );
}

export default App