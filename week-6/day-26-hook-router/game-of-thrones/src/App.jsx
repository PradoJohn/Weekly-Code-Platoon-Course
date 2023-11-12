import { useEffect, useState } from 'react';

import Header from './component/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const [favorites, setFavorites] = useState([])

  useEffect (()=>{

    console.log(favorites)

  }, [favorites])
  return (
    <>
      <Header/>
      <Outlet context={{favorites, setFavorites}}/>
    </>
  )
}

export default App
