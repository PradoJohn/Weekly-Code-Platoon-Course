import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";


export default function App() {

  const [team, setTeam] = useState([])
  const [input, setInput] = useState('')

  useEffect(()=>{
  },[team, input])

  return (
    <>
      <Navbar 
      teamCount={team.length}
      setInput ={setInput}
      />
      <Outlet context = {{team, setTeam, input}}/>
    </>
  );
}
