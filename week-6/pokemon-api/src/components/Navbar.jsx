
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Navbar({ teamCount, setInput }) {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');

  const handleSearch =async() =>{
    if (userInput ===''){
      return;
    }
    
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput.toLowerCase()}`)

      if (response.data !== null){
        navigate(`/pokemon/${response.data.name}`)
        setUserInput('');
        console.log(response.data)
      }
    }catch(error){
      console.log('Not Found Pokemon')
      setInput(`${userInput}`);
      navigate(`/pokemonNotFound/${userInput}`)
      
    }
  }

  return (
    <>
      <nav>
        <h1>PradoPOKEDEX</h1>
        <Link to="/">Home</Link>
        <Link to="/team">My Team #{teamCount}</Link>
        
        <input
          type="text"
          placeholder="search"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button 
        onClick={handleSearch}
        >Search</button>
      </nav>
    </>
  );
}
