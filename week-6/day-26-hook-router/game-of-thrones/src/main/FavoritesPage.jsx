import { useState } from "react";
import CharCard from "../component/CharCard";

const FavoritesPage = ()=>{
    const [favorites, setFavorites] = useState([])

    


    return(
      <>
        <h1>Favorites Page</h1>
        {favorites.map((char)=>(
          <CharCard
          id={char.id}
          name={char.fullName} 
          image={char.imageUrl} 
          family={char.family}
          setFavorites ={setFavorites}
          favorites={favorites}
          />
        ))}
      </>
    );

}

export default FavoritesPage;