import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

function Subscribe() {
  return (
    <Row className='sub-container'>
      <Col md={6}>
        <h2>Subscribe to our Newsletter</h2>
        <p>Sign up with your email address to receive news and updates.</p>
      </Col>
      <Col md={6}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="light" type="submit">
            Subscribe
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Subscribe