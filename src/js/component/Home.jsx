import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx"

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Jumbotron />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
