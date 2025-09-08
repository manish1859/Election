import React, { useContext, useEffect } from 'react'
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';
import img1 from './image1.jpg';
import img2 from './image2.jpg';
import img3 from './image3.jpg';

const Event = () => {
 const { pageTitle, setPageTitle } = useContext(abc);
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


  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  return (
    <>
    <div className="banner">
      <div className="banner-overlay">
        <h1>Events</h1>
        <p style={{ color: 'white' }}>
          <Link to='/' className='parenthome'>{pageTitle}</Link> • Event
        </p>
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


</>
  );
}

export default Event

