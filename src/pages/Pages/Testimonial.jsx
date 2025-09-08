import React, { useContext, useEffect, useState } from 'react'
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';

const Testimonial = () => {
       const { pageTitle, setPageTitle } = useContext(abc);
   
const testinolData = [
  {
    id: 1,
    title: 'David Joy',
    text: '“It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.”',
    img: 'https://i.pravatar.cc/150?img=1',
    iconColor: '#00d1b2',
    presen:'President of AML'

  },
  {
    id: 2,
    title: 'Robert Willum',
    text: '“It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.”',
    img: 'https://i.pravatar.cc/150?img=2',
    iconColor: '#00d1b2',
    presen:'President of BPT '
  },
  {
    id: 3,
    title: 'Leslie Alexaander',
    text: '“It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.”',
    img: 'https://i.pravatar.cc/150?img=3',
    iconColor: '#ff3860',
    presen:'President of TBP'
  },
];
  const [testinolCurrentIndex, setTestinolCurrentIndex] = useState(0);

  const handleTestinolLeft = () => {
    setTestinolCurrentIndex((prev) =>
      prev === 0 ? testinolData.length - 1 : prev - 1
    );
  };

  const handleTestinolRight = () => {
    setTestinolCurrentIndex((prev) =>
      prev === testinolData.length - 1 ? 0 : prev + 1
    );
  };

  const testinolCard = testinolData[testinolCurrentIndex];
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

            <div className='container'>
        <div className='row'>
          <div className='col-lg-5 mx-auto about-team-head py-5 text-center'>
            <span className='about-team-sapn'>- TESTIMONIAL -</span>
            <h2 className='testinol-team-h2 pt-3' style={{fontSize:'26px'}}><b>What People Say About Us.</b></h2>
          </div>
        </div>
        </div>


   <div className="container py-5">
  <div className="testinol-slider-wrapper position-relative text-center">
    <div className="testinol-arrow testinol-left-arrow" onClick={handleTestinolLeft}>
      <span>&larr;</span>
    </div>

    <div className="testinol-card-box mx-auto">
      <div
        className="testinol-circle-icon mx-auto mb-3"
        style={{
          backgroundColor: testinolCard.iconColor,
        }}
      >
        <img src={testinolCard.img} alt="" className="testinol-icon-img" />
      </div>

      <p className="testinol-card-text">{testinolCard.text}</p>
      <h5 className="testinol-card-title">{testinolCard.title}</h5>
      <h5 className="testinol-card-title" style={{ color: '#00d1b2' }}>
        {testinolCard.presen}
      </h5>
    </div>

    <div className="testinol-arrow testinol-right-arrow" onClick={handleTestinolRight}>
      <span>&rarr;</span>
    </div>
  </div>
</div>




    </div>
  )
}

export default Testimonial
