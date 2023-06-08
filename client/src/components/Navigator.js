import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BlogHiveLogo from './assets/logo-no-background.png'
import { UserContext } from '../context/UserProvider';
import './Navigator.css'

function Navigator() {
  const { token, logout, user: { username } } = useContext(UserContext);

  return (
    <>
      <Navbar bg="myBlack" expand="lg" style={{ color: 'white' }} className='nav-bar'>
        <Container fluid className='nav-container'>
          <Row className='nav-row'>
            <Col xs={4}>
              <Navbar.Brand href="#"><img src={BlogHiveLogo} alt='blogHive Logo' width={"100"}/></Navbar.Brand>
            </Col>
            <Col xs={4} className="text-center">
              <Nav className="me-auto my-2 my-lg-0" style={{color: 'white '}} navbarScroll>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact">Contact</Link>
                </Nav.Link>
                {token && (
                  <>
                    <Nav.Link>
                      <Link to="/public">Public</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/profile">Profile</Link>
                    </Nav.Link>
                  </>
                )}
                </Nav>
            </Col>
            <Col xs={4} className="text-end">
                <Nav>
                {token ? (
                  <>
                    <Nav.Link onClick={logout}>Logout {username}</Nav.Link>
                    <Nav.Link>
                      <Link to="/settings">Settings</Link>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link>
                      <Link to="/signin">Login</Link>
                    </Nav.Link>
                    <Button variant="outline-light me-2">
                      <Link to="/signup">Sign Up for Free</Link>
                    </Button>
                  </>
                )}
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigator;
