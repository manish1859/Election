  import React, { useContext, useEffect, useState } from 'react';
  import { abc } from '../../Parent';
  import { Link as RouterLink, useNavigate } from 'react-router-dom';

  const Servicestyle1 = () => {
    const { cardData, currentIndex, goLeft, goRight, pageTitle, setPageTitle } = useContext(abc);
    const [slideDirection, setSlideDirection] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const Nav = useNavigate();

    useEffect(() => {
      setPageTitle('Home');
    }, [setPageTitle]);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getVisibleCards = () => {
      const total = cardData.length;
      if (isMobile) {
        return [cardData[currentIndex]];
      } else {
        const prev = (currentIndex - 1 + total) % total;
        const next = (currentIndex + 1) % total;
        return [cardData[prev], cardData[currentIndex], cardData[next]];
      }
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

    const handleCardNavigation = (id) => {
      if ([1, 3, 4].includes(id)) {
        Nav('/volunteer');
      } else if (id === 2) {
        Nav('/donate');
      }
    };

    const visibleCards = getVisibleCards();

    if (!cardData || cardData.length === 0) return null;

    return (
      <>
        <div className="banner">
          <div className="banner-overlay">
            <h1>Checkout</h1>
            <p style={{ color: 'white' }}>
              <RouterLink to='/' className='parenthome'>{pageTitle}</RouterLink> • Checkout
            </p>
          </div>
        </div>

        <div className="container py-5">
          <div className={`row g-4 justify-content-center position-relative card-slider-wrapper ${slideDirection}`}>
            <div className="arrow left-arrow" onClick={handleLeft} role="button" aria-label="Previous Card">
              <span>&larr;</span>
            </div>
            <div className="arrow right-arrow" onClick={handleRight} role="button" aria-label="Next Card">
              <span>&rarr;</span>
            </div>

            {visibleCards.map((card, index) => {
              const isCenter = !isMobile ? index === 1 : true;

              return (
                <div className={`col-md-4 ${isMobile ? 'col-12' : ''}`} key={card.id} style={{ height: '450px', textAlign: 'center' }}>
                  <div className="card-box text-center position-relative">
                    <div
                      className="circle-icon mx-auto mb-3"
                      style={{
                        backgroundColor: isCenter ? card.iconColor : '#0A1440',
                        color: isCenter ? '#fff' : '#000',
                      }}
                    >
                      <span className="icon-text">
                        <img src={card.img} alt="icon" />
                      </span>
                    </div>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <button className="btn details-btn" onClick={() => handleCardNavigation(card.id)}>
                      DETAILS
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  export default Servicestyle1;
