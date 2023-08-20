import React from 'react';
import {Row, Col } from 'react-bootstrap';
import './About.css'
import Logo from '../Img/real-logo.png'


function About() {

    const AboutStyle = {
        backgroundImage:
            "url('about.jpg')",
        height: '100vh',
        marginTop: '0px',
        backgroundPosition: '55%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className='About' id='About' style={AboutStyle}>
            <div className='container'>
                <Row className='row-title'>
                    <Col md={1} lg={2} />
                    <Col className='text-left' md={6} lg={4}>
                        <h1>
                            Our Company
                        </h1>
                    </Col>
                    <Col md={5} lg={6} />
                </Row>
                <Row className='row-text'>
                    <Col md={1} lg={2} />
                    <Col className='text-justify' md={10} lg={8}>
                        <h4>
                            Southwest Dowel & Wood Products provide high-quality wood products
                            to our customers at the best competitive price. Many of our products 
                            are used in furniture manufacturing, retail hardware stores, and 
                            shopping companies.
                        </h4>
                    </Col>
                    <Col md={1} lg={2} />
                </Row>
                <Row className='row-img'>
                    <Col md={0} lg={1} />
                    <Col md={6} lg={8}>
                        <img src={Logo} alt='Logo' />
                    </Col>
                    <Col md={6} lg={4} />
                </Row>
                <Row className='row-text1'>
                    <Col md={1} lg={2} />
                    <Col className='text-justify' md={10} lg={8}>
                        <h4>
                            Our present customers consistently experience a high quality level of our
                            service and wood products. We are eager to develop new relationships with 
                            distributors and other companies around the world. We have the ability to 
                            quote from your drawing and may already have in-house tooling to meet your 
                            custom turnings and space requirements.
                        </h4>
                    </Col>
                    <Col md={1} lg={2} />
                </Row>

            </div>
        </div>

    );
}

export default About;