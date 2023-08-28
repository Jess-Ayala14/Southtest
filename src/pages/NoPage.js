import React, { Component } from "react";
import { Container, Row, Col }
  from 'react-bootstrap';

class NoPage extends Component {
  render() {


    return (
    <div className="NoPage">
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>  <h1>404</h1></Col>
          <Col xs={2} />
        </Row>
      </Container>
    </div>
    )

  };
}

export default NoPage;