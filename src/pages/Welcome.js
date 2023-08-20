import React, { Component } from "react";
import { Container, Row, Col, Button}
  from 'react-bootstrap';
import './Welcome.css';
import logo from "../Img/real-logo.png";

class Welcome extends Component {
  render() {

    const welcomeStyle = {
      backgroundImage:
        "url('Welcome.jpg')",
      height: '100vh',
      marginTop: '0px',
      backgroundPosition: '80%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }

    const pic_welcome = {
      maxWidth: '100%',
      backgroundImage:
        "url('dowel.png')",
      backgroundPosition: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      marginTop: '180px',
      height: '500px'

    }


    return (

      <div className="Welcome" style={welcomeStyle}>
        <Container>
          <Row>
            <Col xs={2} />
            <Col xs={8}><img className="logo" src={logo} /></Col>
            <Col xs={2} />
          </Row>
        </Container>
        <div className="promotion" style={pic_welcome}>
          <Row>
            <Col xs={1} md={0} lg={2} />
            <Col xs={10} md={6} lg={4}>
              <a href="#Blog">
                <Button>Our Products</Button>
              </a>
            </Col>
            <Col xs={0} md={6} lg={4} />
            <Col xs={1} md={0} lg={2} />
          </Row>
        </div>
      </div>
    )
  };
}


export default Welcome;