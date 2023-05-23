import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="info">Go somewhere</Button>
      </Card.Body>
    </Card>
    

  );
}


export default Cards;
