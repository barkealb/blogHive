import React from 'react'
import Card from 'react-bootstrap/Card';
import './HeroBlogOne.css'

function HeroBlogOne() {
  return (
    <div className='hero-container'>
    <Card className="bg-dark text-white">
      <Card.Img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image" className='hero-image'/>
      <Card.ImgOverlay style={{ padding: "3rem 5rem"}} className='hero-content'>
        <Card.Title className='hero-title'>Communication in Relationships</Card.Title>
        <Card.Text>
        Communication is essential for healthy relationships. Listening attentively, expressing yourself clearly and respectfully, and working together to solve problems and make decisions can help build strong connections with the important people in your life.
        </Card.Text>
        <button>Read More</button>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default HeroBlogOne