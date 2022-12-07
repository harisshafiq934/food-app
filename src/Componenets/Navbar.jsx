
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

import './login.css'

function NavScrollExample() {
  return (
    <Navbar
      
      expand="lg md"
      className="shadow p-3 mb-5  rounded back-color "
    >
      <Container fluid>
        <Link to='/' className="color-nav">
        <Navbar.Brand  >Restaurant</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="nav_main">
            <Nav.Link ><Link to='/contactus' className="color-nav">Contact US </Link></Nav.Link>
            <Link className="color-nav"><Nav.Link >About Us</Nav.Link></Link>

            <Nav.Link ><Link to='/login' className="color-nav">Login </Link> </Nav.Link>
            <Nav.Link href="#">Cart </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
