import axios from "axios";
import { useEffect, useState } from "react";
import CharCard from "../components/CharCard";
import { Row } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";

const CharactersPage = () => {
  
  const [myPage, setMyPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const { favorites, setFavorites } = useOutletContext();


  const getAllCharacters = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${myPage}`);
    setCharacters([...characters, ...response.data.results]);
    setMyPage(myPage + 1);
  };

  useEffect(() => {
    if (myPage < 43) {
      getAllCharacters();
    }
  }, [myPage]);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <Row>
        {characters.map((char) => (
          <CharCard
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </Row>
    </>
  );
};

export default CharactersPage;
