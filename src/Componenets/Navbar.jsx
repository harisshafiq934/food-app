
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import {Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom"
import { useDispatch, useSelector} from "react-redux";
import { logoutUser } from "../actions/userAction";

import './login.css'

const NavScrollExample=()=> {
  const dispatch = useDispatch();
  const cartState = useSelector((state)=> state.cartReducer);
  const userState = useSelector(state=> state.loginUserReducer);
  const {currentUser} = userState;
  return (
    
    <Navbar
      // fixed="top"
      expand="lg md"
      className="shadow p-3 mb-4  rounded back-color  "
    >
      <Container fluid>
        <Link to='/' className="color-nav">
        <Navbar.Brand  >Restaurant</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="nav_main">
            <Nav.Link ><Link to='/contactus' className="color-nav">Contact US </Link></Nav.Link>
            {/* <Link className="color-nav"><Nav.Link >About Us</Nav.Link></Link> */}

            {
              currentUser ? ( <> 

{/* <Nav.Link ><Link to='/' className="color-nav">{currentUser.name}</Link> </Nav.Link> */}
              
              <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
              
              <NavDropdown.Item ><Link to="/orders">Order </Link></NavDropdown.Item> 
              <NavDropdown.Item onClick={()=>{dispatch(logoutUser());}}>
              Logout
              </NavDropdown.Item>
            
            </NavDropdown>
            </>
              ) 
              : (
                <>
                {" "}
              <Nav.Link ><Link to='/login' className="color-nav">Login </Link> </Nav.Link> {" "} </>)
            }

            <Nav.Link ><Link to="/cart" className="color-nav">Cart {cartState.cartItems.length}</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
