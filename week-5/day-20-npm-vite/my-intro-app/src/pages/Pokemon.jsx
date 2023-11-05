
import axios from 'axios';

function Pokemon() {
  // let num = Math.floor(Math.random()*100)+1
  // fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     let pokeImageContainer = document.querySelector(".pokemonImage");
  //     let img = document.createElement("img");
  //     img.src = data.sprites["front_shiny"];
  //     pokeImageContainer.appendChild(img);
  //   });
    let num = Math.floor(Math.random()*100)+1
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    let pokeImageContainer = document.querySelector(".pokemonImage");
    let img = document.createElement("img");
    img.src = response.data.sprites["front_shiny"];
    pokeImageContainer.appendChild(img);

  return (
    <main>
      <div className="container">
        <h1 className="title">Pokemon</h1>
        <div className="pokemonImage"></div>
      </div>
    </main>
  );
}

export default Pokemon;