import React, { useContext, useEffect } from 'react'
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';


const Error = () => {

   const { pageTitle, setPageTitle } = useContext(abc);
  

    useEffect(() => {
      setPageTitle("Home");
    }, [setPageTitle]);
  
  return (
    <div>
                    <div className="banner">
                      <div className="banner-overlay">
                        <h1>404</h1>
                        <p style={{ color: 'white' }}>
                          <Link to='/' className='parenthome'>{pageTitle}</Link> • 404
                        </p>
                      </div>
                    </div>

        <div className='conatiner'>
            <div className='row'>
              <div className='col-lg-7 mx-auto text-center content-404'>
                <img src="https://election-react.wpolive.com/static/media/error-404.1820dcfe63b42c8ea923.png" className='w-75 px-5' alt="" />
                <h3>Oops! Page Not Found!</h3>
                <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                <button>Back to home</button>
              </div>  
            </div>
        </div>

    
    </div>
  )
}

export default Error