import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home1.css';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";


const slidesData = [
  {
    id: 1,
    img: 'https://election-react.wpolive.com/static/media/slide-2.be8478b5c24e1d6f802c.jpg',
  tagline: "WE ARE AWESOME !",
    title: "Let's Make USA Great Again",
    highlight: "Leader",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    btnText: "Explore More",
  },
  {
    id: 2,
    img: 'https://election-react.wpolive.com/static/media/slide-2.be8478b5c24e1d6f802c.jpg',
  tagline: "WE ARE AWESOME !",
    title: "Let's Make USA Great Again",
    highlight: "Leader",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    btnText: "Explore More",
  },
  {
    id: 3,
    img: 'https://election-react.wpolive.com/static/media/slide-2.be8478b5c24e1d6f802c.jpg',
   tagline: "WE ARE AWESOME !",
    title: "World Needs A Leader",
    highlight: "Leader",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    btnText: "Explore More",
  },
  {
    id: 4,
    img: 'https://election-react.wpolive.com/static/media/slide-2.be8478b5c24e1d6f802c.jpg',
     tagline: "WE ARE AWESOME !",
    title: "World Needs A Leader",
    highlight: "Leader",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    btnText: "Explore More",
  }
];

 const cards = [
    {
      id: 1,
      title: "OUR CAMPAIGN",
      description: "Lorem Ipsum has been the industry's standard dummy of the text ever since the scrambled it to make.",
      icon: 'https://election-react.wpolive.com/static/media/1.ef49ba6e73e0ff446edb4a59d07b6f71.svg',
      bgColor: "#2b50f0",
    },
    {
      id: 2,
      title: "BECOME A VOLUNTEER",
      description: "Lorem Ipsum has been the industry's standard dummy of the text ever since the scrambled it to make.",
      icon: 'https://election-react.wpolive.com/static/media/2.c65ec636c2aebfefab2c5a228089a168.svg',
      bgColor: "#00c5a7",
    },
    {
      id: 3,
      title: "MAKE DONATION",
      description: "Lorem Ipsum has been the industry's standard dummy of the text ever since the scrambled it to make.",
      icon: 'https://election-react.wpolive.com/static/media/3.79a705d085328eef4bf09662fb943c78.svg',
      bgColor: "#e11b44",
    },
  ];


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


  const events = [
    {
      title: "Letraset Sheets Passage And Recently.",
      date: "July 1, 2023",
      time: "15:00 - 19:00",
      image: 'https://election-react.wpolive.com/static/media/img-1.e940efc845dc5c513d14.jpg', 
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
    },
    {
      title: "The Best Strategically Build Your Business Earning",
      date: "July 2, 2023",
      time: "10:00 - 15:00",
      image: 'https://election-react.wpolive.com/static/media/img-2.6ad08abb30402c56aa41.jpg',
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
    },
    {
      title: "Political Commitment For Your Deportation Issue",
      date: "July 5, 2023",
      time: "13:00 - 16:00",
      image: 'https://election-react.wpolive.com/static/media/img-3.eb55ec030b35644380c1.jpg',
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
    },
  ];
  const handleArrowClick = (id) => {
    if (id === 2) {
      Nav('/volunteer');
    } else if (id === 3) {
      Nav('/donate');
    }
  };


const Home2 = () => {
  return (
    <>

    
    <div div className="home1-wrapper">
      <Carousel fade indicators={false} interval={5000}>
        {slidesData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100 banner-img"
              src={slide.img}
              alt={slide.title}
            />
            <div className="carousel-overlay"></div>

            <div className="carousel-content-wrapper">
              <Carousel.Caption className="carousel-caption-custom">
                              <p className="tagline">{slide.tagline}</p>

                <h1 className="title">{slide.title}</h1>
                <h1 className="subtitle">{slide.subtitle}</h1>
                <p >{slide.desc}</p>
                   <button className="donate-btn" style={{color:'white'}}>
                  {slide.btnText}
                </button>
              </Carousel.Caption>
              <div className="image-content">
                <img src="https://election-react.wpolive.com/static/media/2.1d5fea9cd036664b670a.png" alt="Leader" />
              </div>

              {/* Added image-content */}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
</div>

<div className="container my-5">
  <div className="row align-items-center">
    
    {/* Left Image */}
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-lg-0">
      <img
        src="https://election-react.wpolive.com/static/media/about.9f7047b6111120982f0e.jpg"
        alt="About Politician"
        className="img-about mt-5"
      />
    </div>

    {/* Right Content */}
    <div className="col-lg-6 col-md-6 col-sm-12">
      <p style={{color:'#de2045'}}>About Politician</p>
      <h2 className="about-head mb-3">
        We raise voice for people rights <span style={{color:'#de2045'}}>&</span>provide rights.
      </h2>
      <p className=" about-pg mb-4">
        Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.
        Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at,
        neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
        Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed
        leo. Ut pharetra augue nec augue.
      </p>
      <button className="submit-btn">More About Us</button>
    </div>
  </div>
</div>




             <div className="container">
      <div className="service-containe row">
        {cards.map((card) => (
          <div
            className="service-card col-lg-4 col-md-4 col-sm-12"
            key={card.id}
            style={{ backgroundColor: card.bgColor }}
          >
            <div className="service-card-icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <h2 className="service-card-title">{card.title}</h2>
            <p className="service-card-description">{card.description}</p>
            <button
              className="service-card-button"
              onClick={() => handleArrowClick(card.id)}
            >
              →
            </button>
          </div>
        ))}
      </div></div>

    <div className='gradient-box1' ></div>

      <div className="container my-5 mt-5">
  <div className="row align-items-start ">
    {/* Left Title Section */}
    <div className="col-lg-3 col-md-12 mb-4 event-con">
      <p style={{ color: '#de2045', fontWeight: '500' }}>– Our Event’s –</p>
      <h2 className="fw-bold event-h2" style={{ color: '#091854', fontSize: '2.5rem', lineHeight: '1.2' }}>
        You Can 
        Attend Our 
        Upcoming 
        Events
      </h2>
      <div style={{ width: '100px', height: '4px', background: 'linear-gradient(to right, #de2045, #204bde)', margin: '50px' }}></div>
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



    <div className="home-container align-content-center">
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
            <div  className="title-system">
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
</div>



    
    </>
  );
};

export default Home2;