import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';


const ACharacter =()=>{
  const [character, setCharacter] =useState(null)
  const {id} =useParams();
  const getACharacter = async()=>{

    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    setCharacter(response.data)
    console.log(response.data)
  }

  useEffect(()=>{
  
     getACharacter()
    
  }, [])


  return(
    <>
    {character ?
      <div id="a-character">
        <img src={character.image} alt="" />
        <ul className="char-description">
          <h1>{character.name}</h1>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <li>Origin: {character.origin.name}</li>
          <li>Location: {character.location.name}</li>
          <li>Created: {character.created}</li>
        </ul>
      </div>
      :
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
   
    }

    </>
  );

}

export default ACharacter;