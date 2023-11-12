
import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
      console.log(favorites)
  }, [favorites])
  return (
    <>
      <Header favorites={favorites}/>
      <Outlet context ={{favorites, setFavorites}} />
    </>
  )
}

export default App
