import React, { useContext, useEffect } from 'react';
import { abc } from '../../Parent';
import { Link, useNavigate } from 'react-router-dom';
import make from '../../assets/MAke donation.svg';

const Servicestyle1 = () => {
  const { pageTitle, setPageTitle } = useContext(abc);
  const Nav = useNavigate();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

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
      icon: make,
      bgColor: "#e11b44",
    },
  ];

  const handleArrowClick = (id) => {
    if (id === 2) {
      Nav('/volunteer');
    } else if (id === 3) {
      Nav('/donate');
    }
  };

  return (
    <div>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Service</h1>
          <p style={{ color: 'white' }}>
            <Link to='/' className='parenthome'>{pageTitle}</Link> • Service
          </p>
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
    </div>
  );
};

export default Servicestyle1;
