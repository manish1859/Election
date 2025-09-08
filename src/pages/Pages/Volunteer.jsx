import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { abc } from '../../Parent';
import{Form} from 'react-bootstrap'
import './Volunteer.css'
import { FaPlus } from "react-icons/fa6";

import voluteer from './image/Voluteer.jpg'

const Volunteer = () => {
    const { pageTitle, setPageTitle ,Manish} = useContext(abc);
      const [formData, setFormData] = useState({ name: '',email: '', subject: '', cv: '', message: ''});

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.cv) tempErrors.cv = "CV is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form submission logic here
      alert('Form submitted successfully!');
    }
  };

  
    useEffect(() => {
      setPageTitle("Home");
    }, [setPageTitle]);
  return (
    <div>
            <div className="banner">
              <div className="banner-overlay">
                <h1>Volunteer</h1>
                <p style={{ color: 'white' }}>
                  <Link to='/' className='parenthome'>{pageTitle}</Link> • Volunteer
                </p>
              </div>
            </div>


           <div className='volunteer-container'>
              <div  className='volut'>
                <img src={voluteer} alt="Volunteer" className='volunteer-img' />
              </div>
    <div className="volunteer-form-outer ">
      <div className="volunteer-form-wrapper h-100">
        <h2>Become a Volunteer</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input
                type="text"
                name="subject"
                placeholder="Your subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>

            <div className="col custom-file-wrapper">
                <label htmlFor="cv" className="custom-file-label">
    {formData.cv?.name || "Upload Your CV"}
    <i className="fa fa-cloud-upload upload-icon" aria-hidden="true"></i>
  </label>
  <input
    type="file"
    name="cv"
    id="cv"
    onChange={handleChange}
    className="custom-file-input"
  />
              {errors.cv && <span className="error">{errors.cv}</span>}
            </div>
          </div>

          <div className="row full">
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Message"
              value={formData.message}
            />
{errors.message && <span className="error">{errors.message}</span>}


          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>

    
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 mx-auto about-team-head py-5 text-center'>
                <span className='about-team-sapn'>- TEAM MEMBER -</span>
                <h2 className='about-team-h2 pt-3'>Campaign Staff</h2>
              </div>
            
    
    
            <div className='row'>
    
{Manish.map((info) => (
  <div className="col-lg-3 col-md-6 col-sm-12 mt-5 z-1" key={info.id}>
    <div className="about-team-div">
      <div className="image-container">
        <img src={info.img} className="about-team-img" alt="" />
        <div className="about-overlay">
          <div className="about-text text-center">
            <span>{info.head}</span>
            <h3 className="pt-3">{info.h3}</h3>
            <FaPlus className="border about-plus-icon rounded-pill" />
          </div>
        </div>
      </div>
    </div>
  </div>
))}
    
              
            </div>
          </div>
</div>
            </div> 
    </div>
  )
}

export default Volunteer
