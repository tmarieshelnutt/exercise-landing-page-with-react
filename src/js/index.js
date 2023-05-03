//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Jumbotron from "./src/component/Jumbotron.jsx";
import navigationBar from './src/component/navigationBar.jsx'
//render your react application




ReactDOM.render(<> <Navbar/><Jumbotron/><Cards/><Home/></>, document.querySelector("#app"));
