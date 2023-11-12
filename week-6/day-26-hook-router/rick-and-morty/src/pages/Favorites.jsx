import React from "react"
import CharCard from "../components/CharCard"
import { useOutletContext } from "react-router-dom";
function Favorites() {
    const { favorites, setFavorites} = useOutletContext();
  return (
    <>
    
    {favorites.map((char)=>(
      <div>
        <h1>{char.data.name}</h1>
        <img src={char.data.image} alt="" />
      </div>

    ))}
    </>
  )
}

export default Favorites
