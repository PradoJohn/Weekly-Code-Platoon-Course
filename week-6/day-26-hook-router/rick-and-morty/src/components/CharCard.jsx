
/******Bootstrap Import***/
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

function CharCard({data, setFavorites, favorites}) {

  const navigate = useNavigate();

  const reRoute = (id)=>{
    navigate(`/characters/${id}`)
  }

  return (
    <Card>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card.Img src={data.image} alt="Card image" />
          </Col>
          <Col xs={12} md={6}>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Button variant='outline-success' onClick={()=>reRoute(data.id)} >details</Button>
              <Button variant='outline-warning' 
              onClick={()=>
              setFavorites([...favorites, {data}])
              }
              >Favorite</Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default CharCard;