import React, { useContext, useState } from 'react';
import img1 from '../eventt/image1.jpg';
import img2 from '../eventt/image1.jpg';
import img3 from '../eventt/image3.jpg';
import about1 from '../about/image/about1.png';
import about2 from '../about/image/about2.png';
import image1 from '../Pages/image/image1.jpg';
import image2 from '../Pages/image/image2.jpg';
import image3 from '../Pages/image/image3.jpg';
import image4 from '../Pages/image/image4.jpg';
import image5 from '../Pages/image/image5.jpg';
import image6 from '../Pages/image/image6.jpg';
import image7 from '../Pages/image/image7.jpg';
import image8 from '../Pages/image/image8.jpg';
import image9 from '../Pages/image/image9.jpg';
import { IoIosAdd } from "react-icons/io";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { abc } from '../../Parent';
import { FaPlus } from "react-icons/fa6";


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Home3 = () => {
  const {Manish} = useContext(abc);
  
  const [selectedIndex, setSelectedIndex] = useState(null);

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const events = [
    {
      title: "Letraset Sheets Passage And Recently.",
      date: "July 1, 2023",
      time: "15:00 - 19:00",
      image: img1, 
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
    },
    {
      title: "The Best Strategically Build Your Business Earning",
      date: "July 2, 2023",
      time: "10:00 - 15:00",
      image: img2,
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
    },
    {
      title: "Political Commitment For Your Deportation Issue",
      date: "July 5, 2023",
      time: "13:00 - 16:00",
      image: img3,
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="home3-hero-section">
        <div className="home3-hero-content">
          <h1>
            Life Without Liberty,<br />As Like Hell.
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.
          </p>
          <button className='donate-btn'>Join the Campaign</button>
        </div>
      </section>

      {/* About Us */}
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='about-us-img rounded'></div>
          </div>
          <div className='col-lg-6 px-4 pt-4'>
            <span className='about-right'>- About Us -</span>
            <h2 className='about-right-head pt-4'>We Can Make Our New Histry Together!</h2>
            <p className='about-right-para py-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras.
              Tristique semper adipiscing massa placerat dictumst amet, libero vitae. Eget purus blandit velit sit mauris nibh porta.
              Sagittis iaculis feugiat sed sem diam, sagittis ullamcorper. Vel posuere justo,
            </p>
            <div className='row my-3'>
              <div className='col-lg-6 col-sm-12'>
                <img src={about1} className='rounded-pill mb-3 about-right-img1' alt="" /><br />
                <span className='about-right-spanimg px-2 '>OUR CAMPAIGN</span>
                <p className='px-2 about-right-paraimg'>Standard dummy of the text ever the scrambled it to make.</p>
              </div>
              <div className='col-lg-6 col-sm-12'>
                <img src={about2} className='rounded-pill mb-3 about-right-img2' alt="" /><br />
                <span className='about-right-spanimg'>BECOME A VOLUNTEER</span>
                <p className='about-right-paraimg'>Standard dummy of the text ever the scrambled it to make.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='gradient-box1'></div>

      {/* Events Section */}
      <div className="container my-5">
        <div className="row align-items-start">
          <div className="col-lg-3 col-md-12 mb-4 event-con">
            <p style={{ color: '#de2045', fontWeight: '500' }}>– Our Event’s –</p>
            <h2 className="fw-bold event-h2" style={{ color: '#091854', fontSize: '2.5rem', lineHeight: '1.2' }}>
              You Can Attend Our Upcoming Events
            </h2>
            <div style={{ width: '50px', height: '4px', background: 'linear-gradient(to right, #de2045, #204bde)', marginTop: '20px' }}></div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row">
              {events.map((event, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={event.image}
                      className="card-img-top"
                      alt={event.title}
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <p className="text-muted mb-2">
                        <i className="bi bi-geo-alt"></i> {event.location}
                      </p>
                      <h5 className="fw-bold mb-3" style={{ color: '#091854' }}>
                        {event.title}
                      </h5>
                      <p className="mb-0">
                        <i className="bi bi-calendar-event"></i> {event.date}
                      </p>
                      <p>
                        <i className="bi bi-clock"></i> {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='gradient-box'></div>


      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="text-center">
          <p className="gallery-subtitle">– Gallery –</p>
          <h2 className="gallery-title">Awesome Gallery Photo.</h2>
        </div>
      </section>

      <div className="container">
        <div className="row">
          {images.map((img, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="gallery-wrapper" onClick={() => setSelectedIndex(index)}>
                <img src={img} alt="" className="gallery-image" />
                <div className="overlay">
                  <span className="plus-icon"><IoIosAdd /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="fullscreen-modal" onClick={() => setSelectedIndex(null)}>
            <img src={images[selectedIndex]} alt="fullscreen" />
            <button className="nav-button left" onClick={goPrev}><FaChevronLeft /></button>
            <button className="nav-button right" onClick={goNext}><FaChevronRight /></button>
            <button className="close-button" onClick={() => setSelectedIndex(null)}><FaTimes /></button>
          </div>
        )}
      </div>


            <div className='container'>
              <div className='row'>
                <div className='col-lg-5 mx-auto about-team-head py-5 text-center'>
                  <span className='about-team-sapn'>- TEAM MEMBER -</span>
                  <h2 className='about-team-h2 pt-3'>Campaign Staff</h2>
                </div>
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
  );
};

export default Home3;
