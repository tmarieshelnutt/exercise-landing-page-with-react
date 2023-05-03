import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavigationBar = () => {
	return (
			<Navbar bg="dark" variant="dark">
			<Container>
			  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
			  <Nav className="ml-auto justify-text-right">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">About</Nav.Link>
				<Nav.Link href="#pricing">Services</Nav.Link>
				<Nav.Link href="#pricing">Contact</Nav.Link>
			  </Nav>
			</Container>
		  </Navbar>
		)
	};
    export default NavigationBar;