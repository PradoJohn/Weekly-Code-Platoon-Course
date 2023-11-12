
import { useParams } from "react-router-dom";

const MissingPokemonPage=()=>{
  const {input} = useParams();
  return(
    <>
    <div>No such pokemon with name or id '{input}' exists!</div>
    </>
  );
}

export default MissingPokemonPage;