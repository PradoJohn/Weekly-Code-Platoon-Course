import { useState, useEffect } from "react";


const PokemonCard = ({id, name,type, img, moves, team, setTeam}) => {

  const [isCatched, setIsCatched] = useState(false)
  
  const releasePokemon = ()=>{
    setTeam(team.filter((pokemon)=>(pokemon.id !== id)));
    setIsCatched(false)
  }

  const catchPokemon =()=>{
    if(team.length < 6){
      setTeam([...team, {id, name, type, img, moves}])
      setIsCatched(true)
    }
  }

  const inTeam =()=>{
    return team.filter((pokemon)=> pokemon.id === id)
  }

  useEffect(()=>{
    if (inTeam().length){
      setIsCatched(true)
    }else{
      setIsCatched(false)
    }

  },[team, id])


  return (
    <div className={`pokemon-card bg-color-${type}`}>
      <h3>{name}</h3>
      <img src={img} alt="" />
      <div className="moves">
        <div>{moves[0]}</div>
        <div>{moves[1]}</div>
        <div>{moves[2]}</div>
        <div>{moves[3]}</div>
      </div>
      <button
      onClick={()=>{isCatched ? releasePokemon(): catchPokemon()}}
      disabled={team.length >= 6 && !isCatched}
      >
        {isCatched ? 'Release' : 'Catch'}
      </button>
    </div>
  );
}

export default PokemonCard;
