import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavigationBar from './component/NavigationBar.jsx';



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import { render } from "react-dom";

//create your first component
class Home extends Component {
	render() {
	return (
	this.landingPage()
	)
	}

	landingPage() {
		return <div className="Navbar">
			<NavigationBar />
		</div>
			,
			<div className="Jumbotron">
				<Jumbotron />
			</div>
			,
			<div className="Cards">
				<Cards />
			</div>;
	}
}
// 		
export default Home;
