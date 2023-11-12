import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

function CharCard({id,name,image, favorites, setFavorites}) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] =useState(false)

  
  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite)=>(favorite.id !==id)))
    setIsFavorite(false)
  }

  const addToFavorites =()=>{
    if(favorites.length < 5){
    setFavorites([...favorites, {id,name,image}])
    setIsFavorite(true)
    }
  }

  const inFavorites =()=>{
    return favorites.filter((favorite)=>favorite.id ===id)
  }

  useEffect(()=>{
    if (inFavorites().length){
      setIsFavorite(true)
    }else{
      setIsFavorite(false)
    }
  },[])

  return (
    

      <Card style={{ width: '18rem', height: '7rem'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className='btns'>
          <Button variant="outline-info" onClick={()=>navigate(`/character/${id}/`)}>Details</Button>
          
          <Button 
          variant="warning"
          onClick={()=>{isFavorite? removeFavorite():addToFavorites()}}
          disabled=
          >
          {isFavorite?
            <AiFillStar/>
          :
            <AiOutlineStar/>
          }
          </Button>
          </div>
  
        </Card.Body>
      </Card>
    
  );
}

export default CharCard;