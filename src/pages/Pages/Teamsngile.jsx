import React, { useContext, useEffect } from 'react';
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';
import { Container, Row,Form,Button, Col,ProgressBar } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import founder from './image/image1.jpg';
import certificate1 from './image/cer1.jpg';
import certificate2 from './image/cer2.jpg';
import certificate3 from './image/cer3.jpg';
import certificate4 from './image/cer4.jpg';

const Teamsngile = () => {
  const { pageTitle, setPageTitle } = useContext(abc);

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <h1>Harry Abraham</h1>
          <p style={{ color: 'white' }}>
            <Link to="/" className="parenthome">
              {pageTitle}
            </Link>{' '}
            • Founder
          </p>
        </div>
      </div>

      {/* Founder Profile */}
      <Container className="mt-5">
        <Row className="align-items-center bg-white shadow rounded py-5 px-1">
          {/* Profile Image */}
          <Col lg={5} md={5} sm={12} className="text-center mb-4 mb-md-0">
            <img
              src={founder}
              alt="Profile"
              className="img-fluid rounded w-100"
              style={{ height: '400px', padding: '20px', objectFit: 'cover' }}
            />
          </Col>

          {/* Profile Info */}
          <Col lg={7} md={7} sm={12}>
            <h2 className="fw-bold  "style={{ color: '#091854' }}>Esther Howard</h2> <br />
            <p>
              <strong >Position:</strong> Founder
            </p>
            <p>
              <strong>Experience:</strong> 12 Years
            </p>
            <p>
              <strong>Address:</strong> 6391 Elgin St. Celina, Delaware 10299
            </p>
            <p>
              <strong>Phone:</strong> +00 568 746 987
            </p>
            <p>
              <strong>Email:</strong> youremail@gmail.com
            </p>

            {/* Certificates */}
            <h4 className="mt-4 fw-bold" style={{ color: '#091854' }}>
              Certificates
            </h4><br />
            <Row className="mt-3 g-2">
              {[certificate1, certificate2, certificate3, certificate4].map((cert, index) => (
                <Col xs={6} md={3} key={index}>
                  <img
                    src={cert}
                    alt={`Cert ${index + 1}`}
                    className="img-fluid rounded shadow-sm cert-img"
                    
                  />
                </Col>
              ))}
            </Row>
          </Col>
      <hr className='hr'/>

      {/* Experience & Education */}
      <div className=" ">
        
          <Row className="align-items-start ">
            {/* Personal Experience */}
            <Col lg={6} md={12} className=" p-4">
              <h2 className="fw-bold mb-4" style={{ color: '#0a0f44' }}>
                Personal Experience
              </h2>
              <p className="text-muted" style={{ fontSize: '17px', lineHeight: '1.9', color: '#5D5851' }}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don’t look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything
                embarrassing hidden in the middle of text.
              </p>
              <p className="text-muted" style={{ fontSize: '17px', lineHeight: '1.9', color: '#5D5851' }}>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
              </p>
            </Col>

            {/* Education */}
            <Col lg={6} md={12} className="p-4">
              <h2 className="fw-bold mb-4" style={{ color: '#0a0f44' }}>
                Education
              </h2>
              <ul className="list-unstyled">
                {[
                  'Academy University School of Political Science, Boston, MA',
                  'Admization Institute of Political Science, Juzment School of Management, Cambridge',
                  'The Syntify High School Of New York',
                  'Education & Political Admissions',
                  'Admization Institute of Political Science, Juzment School of Management, Cambridge',
                ].map((edu, index) => (
                  <li
                  key={index}
                  className="mb-4 d-flex"
                  style={{ color: '#687396', fontSize: '18px', lineHeight: '1.8' }}
                  >
                    <FaAngleDoubleRight className="me-3 mt-1 fs-5" style={{ color: '#687396' }} />
                    {edu}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
       
      </div>
                      <hr className='hr'/>


                      <Container className="p-3">
      <Row>
        {/* Skills Section */}
        <Col lg={6} md={12} >
          <h2 className="fw-bold mb-4" style={{ color: '#0a0f44' }}>Skills</h2>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>Political Science</span>
              <span>85%</span>
            </div>
            <ProgressBar style={{ height: '7px' }} now={85} variant="danger" />
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>Education</span>
              <span>80%</span>
            </div>
            <ProgressBar style={{ height: '7px' }} now={80} variant="danger" />
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>Development</span>
              <span>95%</span>
            </div>
            <ProgressBar style={{ height: '7px' }} now={95} variant="danger" />
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>Qualification</span>
              <span>70%</span>
            </div>
            <ProgressBar style={{ height: '7px' }} now={70} variant="danger" />
          </div>
        </Col>

        {/* Achievements Section */}
        <Col lg={6} md={12}>
          <h2 className="fw-bold mb-4" style={{ color: '#0a0f44' }}>Achievements</h2>
          <ul className="list-unstyled">
            <li className="mb-3" style={{ fontSize:'18px', color:'#687396', lineHeight:'1.3' }}> <span style={{ fontSize:'30px', color:'#687396' }}>»</span> Best Political Science award 2017</li>
            <li className="mb-3" style={{ fontSize:'18px', color:'#687396', lineHeight:'1.3' }}> <span style={{ fontSize:'30px', color:'#687396' }}>»</span> Specials awards for Political activity 2018</li>
            <li className="mb-3" style={{ fontSize:'18px', color:'#687396', lineHeight:'1.3' }}> <span style={{ fontSize:'30px', color:'#687396' }}>»</span> Super Politician Top 50 Politician in USA</li>
            <li className="mb-3" style={{ fontSize:'18px', color:'#687396', lineHeight:'1.3' }}> <span style={{ fontSize:'30px', color:'#687396' }}>»</span> Young star Award at politician in 2021</li>
            <li className="mb-3" style={{ fontSize:'18px', color:'#687396', lineHeight:'1.3' }}> <span style={{ fontSize:'30px', color:'#687396' }}>»</span> Greatest Politician Top 10</li>
          </ul>
        </Col>
      </Row>
    </Container>


                          <hr className='hr'/>

                 <Container className="p-5">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 style={{ color: '#091854' }}>Make an Appointment</h2>
        <p style={{ color: '#6c7a91' }}>
          Do not put off until tomorrow the problems that need to be solved today,<br />
          especially if it concerns your life!
        </p>
      </div>

      {/* Form */}
      <Form>
        <Row className="g-3">
          {/* Name */}
          <Col md={6} xs={12}>
            <Form.Group controlId="formName">
              <Form.Control type="text" style={{backgroundColor:'rgba(222,222,222,0.5)'}} placeholder="Name" />
            </Form.Group>
          </Col>

          {/* Email */}
          <Col md={6} xs={12}>
            <Form.Group controlId="formEmail">
              <Form.Control style={{backgroundColor:'rgba(222,222,222,0.5)'}} type="email" placeholder="Email" />
            </Form.Group>
          </Col>

          {/* Phone */}
          <Col md={6} xs={12}>
            <Form.Group controlId="formPhone">
              <Form.Control style={{backgroundColor:'rgba(222,222,222,0.5)'}} type="text" placeholder="Phone" />
            </Form.Group>
          </Col>

          {/* Service / Department */}
          <Col md={6} xs={12}>
            <Form.Group controlId="formService">
              <Form.Select style={{backgroundColor:'rgba(222,222,222,0.5)'}}>
                <option>River Development</option>
                <option>Education Consulting</option>
                <option>Political Advice</option>
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Case Description */}
          <Col xs={12}>
            <Form.Group controlId="formDescription">
              <Form.Control
                as="textarea"
                style={{backgroundColor:'rgba(222,222,222,0.5)'}}
                rows={5}
                placeholder="Case Description"
              />
            </Form.Group>
          </Col>

          {/* Submit Button */}
          <Col xs={12} className="text-center">
            <Button
              type="submit"
              style={{
                background: 'linear-gradient(90deg, #2b38f7, #f32b5c)',
                border: 'none',
                padding: '10px 40px',
                fontSize: '18px',
                borderRadius: '6px'
              }}
            >
              Appointment
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>



                </Row>

                  </Container>
    </div>
  );
};

export default Teamsngile;
