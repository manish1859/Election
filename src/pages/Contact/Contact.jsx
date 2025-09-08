import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { abc } from "../../Parent";
import {Form,Button,Row,Col,Container,Alert} from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
  const { pageTitle, setPageTitle } = useContext(abc);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'The name field is required.';
    if (!formData.email.trim()) newErrors.email = 'The email field is required.';
    if (!formData.phone.trim()) newErrors.phone = 'The phone field is required.';
    if (!formData.category.trim()) newErrors.category = 'Please select a category.';
    if (!formData.message.trim()) newErrors.message = 'The message field is required.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Reset or submit the form here
    }
  };

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  return (
    <>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Contact Us</h1>
          <p style={{ color: "white" }}><Link to="/" className="parenthome"> {pageTitle} </Link>{" "}• Blog </p>
        </div>
      </div>

      <div className="contact-container">
      <div className="container">
        <div className="row align-content-center px-2 ">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="contact-card text-center">
              <div className="icon-wrapper"><FaMapMarkerAlt /></div>
              <h5 className="contact-title">Address</h5>
              <p className="contact-text">
                7 Green Lake Street<br /> 
                Crawfordsville, IN 47933
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="contact-card text-center">
              <div className="icon-wrapper"><FaEnvelope /></div>
              <h5 className="contact-title">Email Us</h5>
              <p className="contact-text">
                Election@gmail.com<br />
                helloyou@gmail.com
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="contact-card text-center">
              <div className="icon-wrapper"><FaPhone /></div>
              <h5 className="contact-title">Call Now</h5>
              <p className="contact-text">
                +1 800 123 456 789<br />
                +1 800 123 654 987
              </p>
            </div>
          </div>
        </div></div>

      </div>
        <div className="contact-Question">
            <h2 className="question-heading">Have Any Question?</h2>
            <p className="question-paragraph">It is a long established fact that a reader will be distracted <br /> content of a page when looking.</p>
        </div>
      <div className="contact-form">
        
 <Container className="my-5">
      <Form noValidate onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={submitted && !!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={submitted && !!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={submitted && !!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Col>

          <Col md={6} className="mb-3 a">
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              isInvalid={submitted && !!errors.category}
            >
              <option value="" >Select Development</option>
              <option value="River Development">River Development</option>
              <option value="Village Development">Village Development</option>
              <option value="Road Development">Road Development</option>
              <option value="Town Development">Town Development</option>
              <option value="Social Development">Social Development</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              isInvalid={submitted && !!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Col>

          <Col md={12} className="text-center">
            <button className="submit-btn">
              Submit Now
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
</div>
  <div className="contact-map" style={{ width: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318630.104920636!2d-74.30916228081269!3d40.69667265996771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1754208469261!5m2!1sen!2sin"
        // width="100%"
        height="450"
        style={{ border: 0,width:'100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
        
</>
  );
};

export default Contact;
