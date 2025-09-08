import React, { useContext, useEffect } from 'react'
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";


const Team = () => {
  const { pageTitle, setPageTitle ,Manish} = useContext(abc);
  
    useEffect(() => {
      setPageTitle("Home");
    }, [setPageTitle]);
  return (
    <div>
          <div className="banner">
            <div className="banner-overlay">
              <h1>Team</h1>
              <p style={{ color: 'white' }}>
                <Link to='/' className='parenthome'>{pageTitle}</Link> • Team
              </p>
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
    </div>
  )
}

export default Team
