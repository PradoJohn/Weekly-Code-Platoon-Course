
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const ACharacterPage = () => {
  const [character, setCharacter] = useState({})
  const {id} = useParams()
  const {favorites, setFavorites} = useOutletContext();

  useEffect(()=>{
      const getCharacter = async() =>{
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(response.data)
        console.log(response.data)
      }
    getCharacter()
  }, [])

  return (
      <>
      <h1>Character Page</h1>
      
      <div>
        <h2>{character.name}</h2>
        <img src={character.image} alt="" />
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Status: {character.status}</h3>

        <button 
        onClick={()=>
        setFavorites([...favorites, {character}])
        }
        >
          Favorite
        </button>
      </div>
      </>
  );
}


export default ACharacterPage;