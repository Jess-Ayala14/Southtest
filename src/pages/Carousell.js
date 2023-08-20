import React from 'react';
import { Row, Col, Carousel }
  from 'react-bootstrap';
import pic from "../Img/carousel/clamshell.png";
import pic1 from "../Img/carousel/extrusions.jpg";
import pic3 from "../Img/carousel/tubing.jpg";
import pic4 from "../Img/carousel/tubingB.png";
import pic2 from "../Img/carousel/mushroom.jpg";
import pic5 from "../Img/carousel/tubingG.png";
import pic6 from "../Img/carousel/wood.png";
import pic7 from "../Img/carousel/TubingV.jpg";

const Carousell = () => {
  return (
    <div>
      <Row className='tertiary'>
        <Col xs={2} lg={3} />
        <Col xs={8} lg={6} >
          <Carousel>
            <Carousel.Item>
              <img src={pic} />
              <Carousel.Caption>
                <h5 style={{ color: "black" }}>Clam Shell</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic1} />
              <Carousel.Caption>
                <h5 style={{ color: "white" }}>Extrusions</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic2} />
              <Carousel.Caption>
                <h5 style={{ color: "black" }}>Wood Plugs</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic3} />
              <Carousel.Caption>
                <h5 style={{ color: "black" }}>"Polimar" Tubing</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic4} />
              <Carousel.Caption>
                <h5 style={{ color: "black" }}>Blue Tubing</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic5} />
              <Carousel.Caption>
                <h5 style={{ color: "white", marginRight: "60px" }}>Green Tubing</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic6} />
              <Carousel.Caption>
                <h5 style={{ color: "black" }}>Dowel Pins</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic7} />
              <Carousel.Caption>
                <h6 style={{ color: "white" }}>Variety</h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={2} lg={3} />
      </Row>
    </div>
  );
};

export default Carousell;