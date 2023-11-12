import { useOutletContext } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const TeamPage=()=>{
  const {team, setTeam} =useOutletContext();


  return(
    <>

      <h2>My Pokemon Team</h2>

      <h3>No Pokemon Caught Yet</h3>

      {team.map((pokemon)=>(
        <PokemonCard
        id = {pokemon.id}
        name = {pokemon.name}
        img= {pokemon.img}
        moves={pokemon.moves}
        team={team}
        setTeam={setTeam}
        />
      ))}
    </>
  );
}

export default TeamPage;