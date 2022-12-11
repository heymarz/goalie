import React, {useContext} from 'react';
import DataContext from '../DataContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';

function MenuNav() {
  const {loggedin, logoutUser} = useContext(DataContext)

  function loggedOutLinks(){
    return (
      <div>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/signup">Sign up</Nav.Link>
        <Nav.Link href='/login'>Log in</Nav.Link>
      </div>
    )
  }
  function handleLogout(){
    fetch("/logout", {
      method: "DELETE",
    })
    .then(()=>logoutUser());
  }

  function loggedInLinks(){
    return(
     <div>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href='/favorites'>Favorites</Nav.Link>
        <Nav.Link href='/sales'>Own Posts</Nav.Link>
        <Nav.Link href="/login" onClick={handleLogout}>Log out</Nav.Link>
        <Nav.Link href='/posts'>New Post</Nav.Link>
      </div>
    )
  }

  return (
    <Navbar collapseOnSelect expand="" bg="info" >
      <Container>
        <Navbar.Brand href="#home">Goalie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Row>
              <Col>
                { loggedin ? loggedInLinks() : loggedOutLinks() }
              </Col> 
              <Col>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link eventKey={2} href="/contact">
                  Contacts
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MenuNav