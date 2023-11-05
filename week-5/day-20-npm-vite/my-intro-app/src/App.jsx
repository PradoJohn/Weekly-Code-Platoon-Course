import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Pokemon from './pages/Pokemon.jsx'
import GuessingGame from './pages/GuessingGame.jsx'
import ToDoList from './pages/ToDoList.jsx'

function App() {
  // console.log(window.location)
  let Content
  switch (window.location.pathname){
    case "/":
      Content = Pokemon
      break
    case "/tdl":
      Content = ToDoList
      break
    case "/gg":
      Content = GuessingGame
      break
  }
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>

  )
}

export default App
