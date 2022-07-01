import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import "../Adminheader/Adminheader.css";

function NavScrollExample() {

  const navigate = useNavigate()

  return (
    <Navbar  bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#" className=' text-light'>ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="m-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className=' logout text-light ' onClick={() => {
              localStorage.removeItem("adminInfo")
              navigate('/admin')
            }}>Logout</Nav.Link>
            
            
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;