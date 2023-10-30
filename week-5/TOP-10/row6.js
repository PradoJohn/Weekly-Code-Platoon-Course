// const renderPokemonImage = async () => {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     const data = await response.json();
//     let parent = document.getElementById("row-6")
//     if (data.sprites && data.sprites.front_default) {
//       const imgElement = document.createElement("img");
//       imgElement.src = data.sprites.front_default;
//       parent.appendChild(imgElement);
//     } else {
//       console.error("No image data found in the API response.");
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
let num = Math.floor(Math.random()*100)+1
fetch("https://pokeapi.co/api/v2/pokemon/"+num)
  .then((response) => response.json())
  .then((data) => {

    let pokeImg = document.getElementById("pokemonImage");
    let img = document.createElement('img')
    img.src = data.sprites['front_shiny']
    console.log(img.src)
    pokeImg.appendChild(img)
  })

