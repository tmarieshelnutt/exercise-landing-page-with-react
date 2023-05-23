import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx"
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";





function Home() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="container d-flex justify-content-around">
        <Jumbotron />
      </div>
      
      <div className="container d-flex justify-content-space-between w-50 Col lg={true}">
      <Cards 
      img="https://picsum.photos/id/10/200/300"
      title="Card Title"
      text="Some quick example text to build on the card title and make up
      the bulk of the card's content."/>
     
      <Cards 
      img="https://picsum.photos/id/13/200/300"
      title="Card Title"
      text="Some quick example text to build on the card title and make up
      the bulk of the card's content."/>
      
      <Cards 
      img="https://picsum.photos/id/27/200/300"
      title="Card Title"
      text="Some quick example text to build on the card title and make up
      the bulk of the card's content."/>
      </div>
      
    </div>
  );
}

export default Home;
