
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header} from './components/Header'
import { Container, Row} from 'react-bootstrap'
import { useEffect, useState } from 'react'


function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{console.log(favorites)},[favorites])

  return (
    <>
      <Container fluid id="all">
        <Row>
          <Header />
        </Row>

        <Row className='content'>
          <Outlet context={{favorites, setFavorites}}/>
        </Row>
      </Container>
    </>
  )
}

export default App
