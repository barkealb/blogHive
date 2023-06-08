import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AuthForm.css'
import LoginImg from '../components/assets/UI Login Page Desktop Prototype 1.png'

function AuthForm(props) {

  const { userInput:{username, password}, btnTxt, handleChange, handleSubmit} = props
  return (
    <Container className="authForm">
      <Row className="auth-form-container">
        <Col className="auth-form-card">
        <div className="auth-form-header">
          <h3>Let's you Sign In</h3>
          <p>Welcome to BlogHive</p>
        </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
        type="text" 
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Enter User Name" 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password" 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="auth-form-btn">
        { btnTxt }
      </Button>
    </Form>
    <div className="auth-form-footer">
      <p>Don't have an account? <a href="#">Sign Up</a></p>
    </div>
    </Col>
        <Col>
          <img src={LoginImg} alt='login'/>
        </Col>
      </Row>
    </Container>
  )
}

export default AuthForm
