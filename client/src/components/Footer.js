import React from 'react';
import { Col, Row, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <Row className='footer-wrapper'>
          <Col md={6}>
            <h3>BlogHive</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel est vestibulum, gravida elit vel, aliquam elit. Fusce varius nulla in lacinia semper. In vulputate, nibh ut fringilla bibendum, sapien magna eleifend arcu, at faucibus ipsum lacus et ex.</p><br/>
            <p>© 2023 by Barkeal. All rights reserved.</p>
          </Col>
          <Col md={6} className='footer-icon-container'>
            <div className="d-flex justify-content-center mb-4">
              <a href="https://www.facebook.com"><FaFacebook size={30} className="mx-3" /></a>
              <a href="https://www.twitter.com"><FaTwitter size={30} className="mx-3" /></a>
              <a href="https://www.instagram.com"><FaInstagram size={30} className="mx-3" /></a>
            </div>
            <Col>
              <Navbar expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Col>
        </Row>
      );
    }

export default Footer;
