import React, { useContext, useRef, useState } from 'react';
import { abc } from '../../Parent';
import Carousel from 'react-bootstrap/Carousel';
import './Home1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import about1 from '../about/image/about1.png'
import about2 from '../about/image/about2.png'
import { ProgressBar } from 'react-bootstrap';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";

const slides = [
  {
    id: 1,
    img: 'https://election-react.wpolive.com/static/media/slide-6.2ddff36105162591e1ea.jpg',
    title: 'Life Without Liberty,',
    subtitle: 'As Like Hell.',
    desc: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the scrambled it to make.',
    btnText: 'Join The Campaign'
  },
  {
    id: 2,
    img: 'https://election-react.wpolive.com/static/media/slide-4.122b83fcc1be3e83724f.jpg',
    title: 'Freedom is the Heart,',
    subtitle: 'Of Democracy.',
    desc: 'Liberty is the breath of life to nations.',
    btnText: 'Join The Campaign'
  },
  {
    id: 3,
    img: 'https://election-react.wpolive.com/static/media/slide-8.63f210f7df49a810cd1c.jpg',
    title: 'Raise Your Voice,',
    subtitle: 'For Justice.',
    desc: 'Democracy is not just voting, it’s active participation.',
    btnText: 'Join The Campaign'
  }
];
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

const Home1 = () => {
  const { cardData, currentIndex, goLeft, goRight } = useContext(abc);
  const [slideDirection, setSlideDirection] = useState('');
  const Nav = useNavigate();
  const ref = useRef();

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

  return (
    <div className='bg-light mmmm'>
      {/* === CAROUSEL === */}
      <div className="home1-wrapper">
        <Carousel fade indicators={false} interval={5000}>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img className="d-block w-100 banner-img" src={slide.img} alt={slide.title} />
              <div className="carousel-overlay"></div>
              <Carousel.Caption className="carousel-caption-custom">
                <h1>{slide.title}</h1>
                <h1>{slide.subtitle}</h1>
                <p>{slide.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* === CARD SECTION === */}
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
                className=" col-lg-4 col-md-6 card-item"
                data-id={card.id}
                ref={ref}
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

      {/* === ABOUT US SECTION === */}
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='about-us-img rounded'></div>
          </div>
          <div className='col-lg-6 px-4 pt-4'>
            <span className='about-right'>- About Us -</span>
            <h2 className='about-right-head pt-4'>We Can Make Our New Histry Together!</h2>

            <p className='about-right-para py-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras...
            </p>
            <div className='row my-3'>
              <div className='col-lg-6 col-sm-12'>
                <img src={about1} className='rounded-pill mb-3 about-right-img1' alt="" />
                <span className='about-right-spanimg px-2'>OUR CAMPAIGN</span>
                <p className='px-2 about-right-paraimg'>Standard dummy of the text ever...</p>
              </div>
              <div className='col-lg-6 col-sm-12'>
                <img src={about2} className='rounded-pill mb-3 about-right-img2' alt="" />
                <span className='about-right-spanimg'>BECOME A VOLUNTEER</span>
                <p className='about-right-paraimg'>Standard dummy of the text ever...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === DONATE SECTION === */}
      <div className='container-fliud about-donate-main-div'><br /><br /><br />
        <div className='container bg-white'>
          <div className='row'>
            <div className='col-lg-5 col-sm-12'>
              <img
                src="https://election-react.wpolive.com/static/media/donate.b5d71a7a5abc76991648.jpg"
                className='p-2 pt-4 rounded w-100'
                alt=""
              />
            </div>
            <div className='col-lg-7 col-sm-12 py-5 px-4'>
              <span className='about-sonate-span'>DONATE TODAY!</span>
              <h3 className='about-sonate-head py-3'>You Can  Contribute Our Last Campaign</h3>
              <ProgressBar now={60} className="gradient-progress" />
              <p className='d-flex justify-content-between pt-3 pb-4 about-donate-para'>
                <span><span className='about-donate-para-span'>Goal:</span> $85,000</span>
                <span><span className='about-donate-para-span'>Raised:</span> $74,000</span>
              </p>
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

    <div className='gradient-box1' ></div>
<div className="container my-5">
  <div className="row align-items-start">
    {/* Left Title Section */}
    <div className="col-lg-3 col-md-12 mb-4 event-con">
      <p style={{ color: '#de2045', fontWeight: '500' }}>– Our Event’s –</p>
      <h2 className="fw-bold event-h2" style={{ color: '#091854', fontSize: '2.5rem', lineHeight: '1.2' }}>
        You Can 
        Attend Our 
        Upcoming 
        Events
      </h2>
      <div style={{ width: '50px', height: '4px', background: 'linear-gradient(to right, #de2045, #204bde)', marginTop: '20px' }}></div>
    </div>

    {/* Right Cards Section */}

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
<div className='gradient-box' ></div>

      <section className="gallery-section">
        <div className="text-center">
          <p className="gallery-subtitle">– Blog Post –</p>
          <h2 className="gallery-title">Awesome Blog Post & Article.</h2>
        </div>
      </section>
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
  );
};

export default Home1;
