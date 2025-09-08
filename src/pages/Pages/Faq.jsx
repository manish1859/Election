import React, { useContext, useEffect } from 'react';
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';



const Faq = () => {
    const { pageTitle, setPageTitle } = useContext(abc);

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);
   
  
  return (
    <div>
                  <div className="banner">
                    <div className="banner-overlay">
                      <h1>FAQ</h1>
                      <p style={{ color: 'white' }}>
                        <Link to='/' className='parenthome'>{pageTitle}</Link> • FAQ
                      </p>
                    </div>
                  </div>
      





      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 mx-auto accordain-content'>
            <h1 className=" text-center">Frequently Asked Question</h1>
            <div>
              

       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="4">
        <div className="header">
        <Accordion.Header >Market reserch on our global  panal with support from our expert.</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <div className="header">
        <Accordion.Header >Planning can help alleviate workplace stress and increase productivity</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <div className="header">
        <Accordion.Header >Those who expriment the most, are able to innovate the best.</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <div className="header">
        <Accordion.Header>Understand Your Problem, You must understand the issue.</Accordion.Header>

        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.
        </Accordion.Body>
        </div>
      </Accordion.Item>
    </Accordion>
              
            </div>
          </div>
        </div>
      </div>



    <div className="container-fliud ">

        <div className="row">
          <div className="col-lg-5 mx-auto">
            <h2 className="text-center">Do You Have Any Question?</h2>
            <div className="text-center from">
              <h3>Get In Touch</h3>
              <input type="text" placeholder="Name" className="w-75"/><br />
              <input type="Email" placeholder="Email" className="w-75"/><br />
              <input type="number" placeholder="Phone" className="w-75"/><br />
              <textarea className="w-75" placeholder="Your Question"></textarea><br />
              <button>Submit Now</button>
            </div>
          </div>
        </div>
    </div>




    </div>
  )
}

export default Faq