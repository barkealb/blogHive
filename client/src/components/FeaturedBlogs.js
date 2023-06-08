import React from 'react';
import './FeaturedBlogs.css'
import { Container, Row, Col, Card } from 'react-bootstrap';


const FeaturedBlogs = () => {

  const cards = [
    {
      id: 1,
      imgSrc: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "The Benefits of Mindfulness Meditation",
      description: "Mindfulness meditation is a powerful practice that has been gaining popularity in recent years. It involves focusing your attention on the present moment, without judgment or distraction. This can be achieved through a variety of techniques, such as deep breathing, body scanning, and visualization. Research has shown that regular mindfulness meditation can have a variety of benefits, including reduced stress and anxiety, improved mood and well-being, increased focus and concentration, and even physical health benefits such as reduced inflammation and improved immune function. Whether you're new to meditation or a seasoned practitioner, incorporating mindfulness into your daily routine can have a positive impact on your overall health and well-being.",
    },
    {
      id: 2,
      imgSrc: "https://images.unsplash.com/photo-1506452819137-0422416856b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      title: "Tips for Effective Time Management",
      description: "Time management is a crucial skill that can help you be more productive and achieve your goals. There are many strategies you can use to manage your time effectively, such as setting goals, prioritizing tasks, and using tools like calendars and to-do lists. One key tip is to break larger tasks into smaller, more manageable steps, which can help you stay focused and avoid feeling overwhelmed. Another important aspect of time management is learning to say no to activities and commitments that don't align with your goals or values. By prioritizing your time and focusing on what's most important, you can make the most of each day and achieve your long-term objectives.",
    },
    {
      id: 3,
      imgSrc: "https://images.unsplash.com/photo-1604183667964-bce80268b39d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "The Power of Positive Thinking",
      description: "Positive thinking is a mindset that involves focusing on the good in life and approaching challenges with optimism and resilience. This can have a powerful impact on your mental and emotional well-being, as well as your relationships and overall quality of life. Research has shown that positive thinking can lead to lower levels of stress, increased happiness and life satisfaction, and even better physical health outcomes. Some strategies for cultivating a more positive outlook include practicing gratitude, reframing negative thoughts into positive ones, and surrounding yourself with positive influences. By adopting a more positive mindset, you can improve your overall outlook on life and achieve greater success and fulfillment.",
    },
    {
      id: 4,
      imgSrc: "https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "The Importance of Self-Care",
      description: "Self-care is a term that refers to any activity or practice that promotes physical, mental, or emotional well-being. This can include anything from exercise and healthy eating to meditation and spending time with loved ones. Taking care of yourself is important not just for your own health and happiness, but also for your relationships and productivity. When you're feeling stressed or overwhelmed, taking a break to engage in self-care can help you recharge and come back to your tasks with renewed focus and energy. It's important to prioritize self-care as part of your daily routine, and to be kind and compassionate to yourself when you're struggling. By taking care of yourself, you can better take care of others and live a more fulfilling life.",
    },
  ];
  return (
    <Container className='featured-container'>
      <span className='featured-text'><h1>Featured Posts</h1></span>
      <Row className='featured-wrapper'>
        {cards.slice(0, 4).map((blog) => (
          <Col key={blog.id} md={3}>
            <div className='card-container'>
              <Card className="featured-card border-0" >
                <Card.Img variant="top" src={blog.imgSrc} className="featured-card-img" />
                <Card.Body className='featured-body'>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedBlogs;
