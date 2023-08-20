import React from 'react';
import { Image, Row, Col, Container}
  from 'react-bootstrap';
import Carousell from './Carousell';
import './Blog.css'
import holder from '../Img/dowel_pic.jpg';
import holder1 from '../Img/dowel_pic1.jpg';
import holder2 from '../Img/dowel_pic2.jpg';
import logo from '../Img/real-logo.png'

function Blog() {

  const BlogStyle = {
    backgroundImage:
      "url('products.jpg')",
    height: '100vh',
    marginTop: '0px',
    backgroundPosition: '55%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='Blog' id="Blog" style={BlogStyle}>
      <Container>
        <Row className='text-left'>
          <h1>Our Products</h1>
        </Row>
        <Row>
          <Col xs={0} lg={1} />
          <Col xs={4} lg={3}>
            <Image src={holder} rounded />
          </Col>
          <Col xs={4} lg={3}>
            <Image src={holder1} rounded />
          </Col>
          <Col xs={4} lg={3}>
            <Image src={holder2} rounded />
          </Col>
          <Col xs={0} lg={1} />
        </Row>
        <Row className='text text-left'>
          <h3>
            Our specialty is high-quality wood products at the best price
          </h3>
        </Row>
        <img src={logo} className='logo' />
        <Row className='secondary text-left'>
          <h2>We also produce</h2>
        </Row>
       <Carousell/>
      </Container>
    </div>
  );
};

export default Blog;