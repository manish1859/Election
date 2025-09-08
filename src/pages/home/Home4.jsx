import React, { useContext, useState } from 'react'
import home4 from './home4.png'
import { useNavigate } from 'react-router-dom';
import { abc } from '../../Parent';
import about1 from '../about/image/about1.png'
import about2 from '../about/image/about2.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaPlus } from "react-icons/fa6";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";


const Home4 = () => {
    const { cardData, currentIndex, goLeft, goRight,Manish } = useContext(abc);
    const [slideDirection, setSlideDirection] = useState('');
    const Nav = useNavigate();
  
    const getVisibleCards = () => {
      const total = cardData.length;
      const prev = (currentIndex - 1 + total) % total;
      const next = (currentIndex + 1) % total;
      return [cardData[prev], cardData[currentIndex], cardData[next]];
    };
  
    const handleLeft = () => {
      setSlideDirection('slide-left');
      setTimeout(() => {
        goLeft();
        setSlideDirection('');
      }, 300);
    };
    
  const handleRight = () => {
    setSlideDirection('slide-right');
    setTimeout(() => {
      goRight();
      setSlideDirection('');
    }, 300);
  };

  const visibleCards = getVisibleCards();

  const Link = (id) => {
    if (id === 1 || id === 3 || id === 4) {
      Nav('/volunteer');
    } else if (id === 2) {
      Nav('/donate');
    }
  }

const homeCards = [
    { title: "MEDICAL SYSTEM", img: img1, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "MEDICAL SYSTEM" },
    { title: "RESIDENTIAL AREA", img: img2, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "RESIDENTIAL AREA" },
    { title: "TRAFFIC JAM", img: img3, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "TRAFFIC JAM" },
    { title: "ECONOMIC ZONE", img: img4, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "ECONOMIC ZONE" },
    { title: "FOOD SAFETY", img: img5, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "FOOD SAFETY" },
    { title: "FOREIGN POLICY", img: img6, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "FOREIGN POLICYE" },
    { title: "EDUCATION SYSTEM", img: img7, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "EDUCTION SYSTEM" },
    { title: "FAMILY SAFETY", img: img8, desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", btnText: "FAMILY SAFETY" }
  ];

  return (
    <div >
    <div className="home4-hero-container ">
      <div className="home4-hero-content">
        <h1>PEACE IS IMPORTANT,<br />NOT WAR.</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.</p>
        <button className='donate-btn'>JOIN THE CAMPAIGN</button>
      </div> 
      <div className="home4-hero-image">
        <img src={home4} alt="Campaign Person" />
      </div>
    </div>
    <div className="container py-5">
        <div className={`row g-4 justify-content-center position-relative card-slider-wrapper ${slideDirection}`}>
          <div className="arrow left-arrow" onClick={handleLeft}>
            <span>&larr;</span>
          </div>
          <div className="arrow right-arrow" onClick={handleRight}>
            <span>&rarr;</span>
          </div>

          {visibleCards.map((card, index) => {
            const isCenter = index === 1;
            return (
             <div
  className={`col-lg-4 col-md-6 card-item ${card.type === 'donation' ? 'donation-card' : ''}`}
  data-id={card.id}
  key={card.id}
  style={{ height: '400px', textAlign: 'center' }}
>
  <div className="card-box text-center position-relative">
    <div
      className="circle-icon mx-auto mb-3"
      style={{
        backgroundColor: isCenter ? card.iconColor : '#0A1440',
        color: isCenter ? '#fff' : '#000',
      }}
    >
      <span className="icon-text"><img src={card.img} alt="" /></span>
    </div>
    <h5 className="card-title">{card.title}</h5>
    <p className="card-text">{card.text}</p>
    <button className="btn details-btn" onClick={() => Link(card.id)}>DETAILS</button>
  </div>
</div>

            );
          })}
        </div>
      </div>

          
            <div className='container my-5'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='about-us-img rounded'>
                  </div>
                </div>
                <div className='col-lg-6 px-4 pt-4'>
                  <span className='about-right'>- About Us -</span>
                  <h2 className='about-right-head pt-4'>We Can Make Our New Histry Together!</h2>
                  <p className='about-right-para py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras. Tristique semper adipiscing massa placerat dictumst amet, libero vitae. Eget purus blandit velit sit mauris nibh porta. Sagittis iaculis feugiat sed sem diam, sagittis ullamcorper. Vel posuere justo,</p>
                  <div className='row my-3'>
                    <div className='col-lg-6 col-sm-12'><img src={about1} className='rounded-pill mb-3 about-right-img1' alt="" /><br />
                      <span className='about-right-spanimg px-2 '>OUR CAMPAIGN</span>
                      <p className='px-2 about-right-paraimg'>Standard dummy of the text ever the scrambled it to make.</p>
                        </div>
                        <div className='col-lg-6 col-sm-12'><img src={about2} className='rounded-pill mb-3  about-right-img2' alt="" /><br />
                          <span className='about-right-spanimg'>BECOME A VOLUNTEER</span>
                          <p className='about-right-paraimg'>Standard dummy of the text ever the scrambled it to make.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
          
                <div className='container-fliud  about-donate-main-div'><br /><br /><br />
        <div className='container bg-white'>
          <div className='row'>
            <div className='col-lg-5 col-sm-12'>
              <div>
                <img src="https://election-react.wpolive.com/static/media/donate.b5d71a7a5abc76991648.jpg" className='p-2 pt-4 rounded w-100' alt="" />
              </div>
            </div>
            <div className='col-lg-7 col-sm-12 py-5 px-4'>
              <span className='about-sonate-span'>DONATE TODAY!</span>
              <h3 className='about-sonate-head py-3'>You Can Contribute Our Last Campaign</h3>
              <ProgressBar now={60} className="gradient-progress" />
              <p className='d-flex justify-content-between pt-3 pb-4 about-donate-para'><p><span className='about-donate-para-span'>Goal:</span>$85,000</p><p className='px-5'><span className='about-donate-para-span'>Raised:</span>$74,000</p></p>
              <button className='donate-btn'>DONATE NOW</button>
            </div>
          </div>
        </div><br /><br /><br />
      </div>



    <div className="home-container">
      <section className="gallery-section">
        <div className="text-center">
          <p className="gallery-subtitle">– Our Mission & Vission –</p>
          <h2 className="gallery-title">We Can Make Solution</h2>
          <h2 className="gallery-title">Everything To Our Demand.</h2>
        </div>
      </section>

      <div className="home-grid">
        {homeCards.map((card, index) => (
          <div key={index} className="home-card">
            <img src={card.img} alt={card.title} className="home-img" />
            <div className="title-system">
              {card.btnText}
            </div>
            <div className={`home-overlay ${card.desc ? "home-active" : ""}`}>
              <h3>{card.title}</h3>
              {card.desc && <p>{card.desc}</p>}
            </div>
            {!card.desc && (
              <div className="home-label">
                {card.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


        <div className='container about-mid-main-img mt-5 rounded'>
        <div className='row'>
          <div className='col-lg-11 mx-auto mx-2 my-3 about-mid-col-color py-5 rounded'>
            <div className='row'>
              <div className='col-lg-8'>
                <span className='about-mid-span'>WE ARE HERE</span>
                <h3 className='about-mid-para'>Let’s fight with all injustice and corruption.</h3>
              </div>
              <div className='col-lg-4'>
                <div className='text-center'>
                  <button className='about-mid-btn py-2 px-4'>CALL US</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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


    <div className="home1-container container">
      <div className="row ">
      <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
        <div className="card">
        <div className="card-body">
        <img  src="https://election-react.wpolive.com/static/media/img-1.83548eccfdeb185da949.jpg"
          alt="Press Conference"
          className="home1-image"
        />
        <div className="home1-content">
          <div className="home1-date-box">
            <span className="home1-date">28</span>
            <span className="home1-month">AUGUST</span>
          </div>
          <h2 className="home1-title">Letraset Sheets Passage And Recently.</h2>
          <p className="home1-description">
            Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
          </p>
          <button className="home1-readmore">READ MORE</button>
        </div>
      </div></div></div>
      <div className=" col-lg-4 col-md-6 col-sm-12  mb-3">
           <div className="card">
        <div className="card-body">
        <img
          src="https://election-react.wpolive.com/static/media/img-2.7ea5428df9d596b93bb6.jpg"
          alt="Press Conference"
          className="home1-image"
        />
        <div className="home1-content">
          <div className="home1-date-box">
            <span className="home1-date">25</span>
            <span className="home1-month">AUGUST</span>
          </div>
          <h2 className="home1-title">Politics is why we can’t have nice things.</h2>
          <p className="home1-description">
            Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
          </p>
          <button className="home1-readmore">READ MORE</button>
        </div>
      </div>
        </div>
      </div>
      <div className=" col-lg-4 col-md-6 col-sm-12 mb-3">
             <div className="card">
        <div className="card-body">
        <img
          src="https://election-react.wpolive.com/static/media/img-3.8fa16f1ce271796f6059.jpg"
          alt="Press Conference"
          className="home1-image"
        />
        <div className="home1-content">
          <div className="home1-date-box">
            <span className="home1-date">23</span>
            <span className="home1-month">AUGUST</span>
          </div>
          <h2 className="home1-title">Letraset Sheets Passage And Recently.</h2>
          <p className="home1-description">
            Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
          </p>
          <button className="home1-readmore">READ MORE</button>
        </div>
      </div>
        </div>
      </div>
    </div></div> 

        </div>
  )
}

export default Home4
