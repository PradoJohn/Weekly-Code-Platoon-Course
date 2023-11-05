import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Students from './Students.jsx'
import Assignments from './Assignments.jsx'
import './App.css'

function App() {
  let StudentsContent

  switch(window.location.pathname){

    case '/':
      StudentsContent = Students
      break;
    case '/assignments':
      StudentsContent = Assignments
      break;
  }

  return (
    <>
    <Header/>
    <main className='container'>
      <StudentsContent/>
    </main>
    </>

  )
}

export default App
