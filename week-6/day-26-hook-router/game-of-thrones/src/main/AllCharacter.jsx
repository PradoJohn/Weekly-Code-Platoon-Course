
import axios from 'axios';
import { useEffect, useState } from 'react';
import CharCard from '../component/CharCard';
import { useOutletContext } from 'react-router-dom';

const AllCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const {setFavorites, favorites} = useOutletContext();
  const getAllCharacters = async()=>{
    let response = await axios.get('https://thronesapi.com/api/v2/Characters')
    console.log(response.data);
    setCharacters(response.data);
  }

  useEffect(()=>{

    getAllCharacters()
  },[])

  return (
    
    <>
      <h1>All Character</h1>
      <div className='cards'>
      {characters.map((char, idx)=>(
        <CharCard key={idx} 
        name={char.fullName} 
        image={char.imageUrl} 
        family={char.family}
        setFavorites ={setFavorites}
        favorites={favorites}
        />
      ))}
      </div>
    </>
  );
} 

export default AllCharacter;