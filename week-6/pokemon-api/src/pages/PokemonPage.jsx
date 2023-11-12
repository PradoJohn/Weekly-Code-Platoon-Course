import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const PokemonPage = () => {
  const [poke, setPoke] = useState({});
  const { name } = useParams();
  const {team, setTeam} = useOutletContext();

  const getPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPoke(response.data);

  };

  useEffect(() => {
    getPokemon();
  }, []);


  const types = (poke.types && poke.types.map(type => type.type.name)) || [];
  const { front_default: image } = poke.sprites || {};
  const movesArray = (poke.moves || []).slice(0, 4).map(move => move.move.name);

 
  return (
    <>
      <h2>{name}</h2>
      <PokemonCard
      id= {poke.id}
      name={name} 
      type={types[0]} 
      img={image} 
      moves={movesArray}
      team={team}
      setTeam={setTeam} 
       />
    </>
  );
}

export default PokemonPage;
