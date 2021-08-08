import React from 'react'; 
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () =>  { 
    return (
    <Navbar bg="dark" expand="lg" variant="dark" style={{paddingLeft: '3rem'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/form-list">Form List</Nav.Link>
                </Nav>
        </Navbar.Collapse>
    </Navbar>
    ); 
} 
export default NavigationBar;