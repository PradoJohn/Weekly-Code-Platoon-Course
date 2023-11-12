import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CharCard({id, name, image, family, favorites, setFavorites}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {family}
        </Card.Text>
        <Button variant="primary"
          onClick={setFavorites(()=> [...favorites, {"id":id, name: name, }])}
        >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CharCard;