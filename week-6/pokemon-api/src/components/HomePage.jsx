import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function HomePage() {
  const [pokemon, setPokemon] = useState([]);

  const getAllPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30`
      );
      setPokemon(response.data.results);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  // console.log(pokemon)
  return (
    <>
      <div className="main-page-contents">
        <h2>Home</h2>

        <ol>
          {pokemon.map((poke, idx) => (
            <li key={idx}>
              <Link to={`pokemon/${poke.name}`}>{poke.name}</Link>
            </li>
          ))}
        </ol>

      </div>
    </>
  );
}
