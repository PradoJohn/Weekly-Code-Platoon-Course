import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import CharCard from "../components/CharCard";

const ResultPage = () => {
  const { name } = useParams();
  const [results, setResults] = useState([]);
  const { favorites, setFavorites } = useOutletContext();
  const [nextPage, setNextPage] = useState(1);
  const [trigger, setTrigger] = useState(false)


  const getResults = async () => {
    let response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${nextPage}&name=${name
        .split(" ")
        .join("%20")}`
    )
    setResults([...results, ...response.data.results]);
    if (response.data.info.pages > nextPage) {
      setNextPage(nextPage + 1);
    }
  };

  useEffect(()=>{
    setResults([])
    setNextPage(1)
    setTrigger(!trigger)
  },[name])

  useEffect(() => {
    getResults();
  }, [nextPage, trigger]);

  return (
    <>
      <h2>{name}</h2>
      {results.map((character) => (
        <CharCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </>
  );
};

export default ResultPage;