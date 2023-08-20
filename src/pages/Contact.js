import { useState, useEffect } from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import './Contact.css'
import Logo from '../Img/real-logo.png'

const Contact = () => {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [cname, setCname] = useState("");
  const [email, setEmail] = useState("");
  const [textMessage, setMessage] = useState("");

  const [validated, setValidated] = useState(false);

  function sendMessage(message, remail) {

    console.log(message);
    var AWS = require('aws-sdk');
    AWS.config.update({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
      }
    });

    // Create sendEmail params 
    var params = {
      Destination: { /* required */
        ToAddresses: [
          'alonsom@southwestdowel.com','aaront@southwestdowel.com',
          /* more items */
        ]
      },
      Message: { /* required */
        Body: { /* required */
          Text: {
            Charset: "UTF-8",
            Data: message
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'New Contact Message'
        }
      },
      Source: 'admin@southwestdowel.com', /* required */
      ReplyToAddresses: [
        remail,
        /* more items */
      ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
      function (data) {
        console.log(data.MessageId);
      }).catch(
        function (err) {
          console.error(err, err.stack);
          alert("error to sent message");
        });
    // snippet-end:[ses.JavaScript.email.sendEmail]
  }

  const handleSubmit = (event) => {
    var contact_ = '';
    var bodymessage = '';

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else if (form.checkValidity() === true) {
      contact_ = 'New message from:\n\n' + 'Contact: ' + fname.charAt(0).toUpperCase() + fname.slice(1) + ' ' + lname.charAt(0).toUpperCase() + lname.slice(1) + '\n' + (cname ? 'Company name: ' + cname.charAt(0).toUpperCase() + cname.slice(1) + '\n' : '') + 'email: ' + email + '\n';
      bodymessage = contact_ + '\n' + 'Message:' + textMessage;
      sendMessage(bodymessage, email);
      alert("Sent Successfully");
    }
    
  };

  const ContactStyle = {
    backgroundImage:
      "url('contact.jpg')",
    height: '100vh',
    marginTop: '0px',
    backgroundPosition: '55%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='Contact' id="Contact" style={ContactStyle}>
      <Container>
        <Row>
          <Col xs={1} md={1} lg={2} />
          <Col xs={10} md={5}>
            <img src={Logo} alt='Logo' />
            <h4>{process.env.AWS_SECRET_ACCESS_KEY}</h4>
          </Col>
          <Col xs={1} md={5} />
        </Row>
        <br />
        <Row>
          <br />
          <Col xs={1} md={2} lg={3} />
          <Col className='text-left form' xs={10} md={8} lg={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={1} md={2} />
                <Col className='content-form' xs={10} md={8}>
                  <h1>Write us</h1>
                  <Form.Group className='form-group' controlId="validationFname">
                    <Form.Label>First name*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='form-group' controlId="validationLname">
                    <Form.Label>Last name*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company name (optional)"
                      value={cname}
                      onChange={(e) => setCname(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className='form-group' controlId="validationEmail">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='form-group' controlId='validationMessage'>
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Leave a message here*"
                      style={{ height: '100px' }}
                      value={textMessage}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <br />
                  <Button variant="info" type="submit">Send</Button>
                </Col>
                <Col xs={1} md={2} />
              </Row>
            </Form>
          </Col>
          <Col xs={1} md={2} lg={3} />
        </Row>


      </Container>
    </div>
  );
};

export default Contact;