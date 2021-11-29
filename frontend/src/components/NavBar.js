import React from 'react';

import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = () => {

    const nbStyle = {

        color: "orange",
        fontFamily: "Sans-Serif",
        fontSize: "20px"
                 
        }

    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="home" style={nbStyle}>Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" style={nbStyle}>Vuelos</Nav.Link>
      <Nav.Link href="#pricing" style={nbStyle}>Paquetes</Nav.Link>
      <NavDropdown title="" id="collasible-nav-dropdown" menuVariant="dark">

        <NavDropdown.Item href="#action/3.1">Buscar vuelos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Reservar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pagar</NavDropdown.Item>
     
      </NavDropdown>

    </Nav>
    <Nav>
      <Nav.Link href="#deets" style={nbStyle}>Buscador de Vuelos</Nav.Link>
      <Nav.Link eventKey={2} href="#memes" style={nbStyle}>
        Confirmar reserva
      </Nav.Link>
      <Nav.Link href="#deets" style={nbStyle}>Pagar</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}
export default NavBar
