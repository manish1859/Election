// Gallery.jsx
import React, { useContext, useEffect, useState } from 'react';
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';
import './gallery.css';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { IoIosAdd } from "react-icons/io";


import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';
import image4 from './image/image4.jpg';
import image5 from './image/image5.jpg';
import image6 from './image/image6.jpg';
import image7 from './image/image7.jpg';
import image8 from './image/image8.jpg';
import image9 from './image/image9.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Gallery = () => {
  const { pageTitle, setPageTitle } = useContext(abc);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Gallery</h1>
          <p style={{ color: 'white' }}>
            <Link to='/' className='parenthome'>{pageTitle}</Link> • GALLERY
          </p>
        </div>
      </div>

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
                <div className="overlay ">
                  <span className="plus-icon"><IoIosAdd />
</span>
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
    </div>
  );
};

export default Gallery;
