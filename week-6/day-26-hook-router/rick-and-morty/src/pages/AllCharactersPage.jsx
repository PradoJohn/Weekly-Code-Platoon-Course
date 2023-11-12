
import axios from "axios";
import { useState, useEffect } from "react";
import CharCard from "../components/CharCard";
import { useOutletContext } from "react-router-dom";

const AllCharactersPage = () => {
  const [characters, setCharacters] = useState([])
  const {favorites, setFavorites} = useOutletContext();

  useEffect(() => {
    const createData = async (site) => {
        let response = await axios.get(site)
        let characterData = response.data.results
        if (response.data.info.next) {
            try {
                createData(response.data.info.next)
            } catch {
                console.log("Something happened")
            }

        }
        for (let i = 0; i < characterData.length; i++) {
            setCharacters(prevData => [...prevData, characterData[i]])
        }

    }

    createData(`https://rickandmortyapi.com/api/character/`)
}, [])


  return (
    <>
      <h1>All Character Page</h1>
      
      <div className="cards">
      {characters.map((chars, idx)=>(
          <CharCard key={idx} 
          data={chars}
          favorites={favorites}
          setFavorites={setFavorites}
          />
      ))}
      </div>

    </>
     
  
  );
}


export default AllCharactersPage;


