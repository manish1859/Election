import React, { useContext, useEffect } from 'react'
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaPlus } from "react-icons/fa6";
import about1 from '../about/image/about1.png'
import about2 from '../about/image/about2.png'
import './About.css'

const About = () => {
const { pageTitle, setPageTitle ,Manish} = useContext(abc);

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  return (
   <>
    <div className="banner">
      <div className="banner-overlay">
        <h1>About US</h1>
        <p style={{ color: 'white' }}>
          <Link to='/' className='parenthome'>{pageTitle}</Link> • ABOUT
        </p>
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


   </>
  );
}

export default About
