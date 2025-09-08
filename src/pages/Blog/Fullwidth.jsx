import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { abc } from '../../Parent';
import { SlControlPlay } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";

const Fullwidth = () => {
 const { pageTitle, setPageTitle } = useContext(abc);
 
   useEffect(() => {
     setPageTitle("Home");
   }, [setPageTitle]);
 
   return (
    <div>
     <div className="banner">
       <div className="banner-overlay">
         <h1>Latest News</h1>
         <p style={{ color: 'white' }}>
           <Link to='/' className='parenthome'>{pageTitle}</Link> • Blog
         </p>
       </div>
     </div>

      <div className="container">
        <div className="row">
          <div className="col-12 blog-full" >
              <img src="https://election-react.wpolive.com/static/media/img-1.740bc1e6233171bb29c0.jpg" alt="news"
                        className="w-100 rounded"/>
            
                      <div className="meta d-flex align-items-center gap-3  text-muted small">
                        <span><i className="far fa-user"></i> By</span>
                        <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-comments"></i> Comments 35</span>
                        <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-calendar-alt"></i> 25 Sep 2023</span>
                      </div>
            
                      <h3 className="mt-3 fw-bold text-dark post-title ">
                        Letraset Sheets Passage And Recently.
                      </h3>
                      <p className="text-secondary post-desc pt-4">
                        Law is a great career path if you want to build a broad skill set that includes everything from
                        critical thinking and strategic planning to communications. If you love rising to a challenge.
                      </p>
                    <a href="#" className="read-more-link">READ MORE...</a>
            
                                <img src="https://election-react.wpolive.com/static/media/img-2.7073a8c7774f861649a5.jpg" alt="news"
                        className="w-100 rounded"/>
            
                      <div className="meta d-flex align-items-center gap-3  text-muted small">
                        <span><i className="far fa-user"></i> By</span>
                        <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-comments"></i> Comments 35</span>
                        <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-calendar-alt"></i> 25 Sep 2023</span>
                      </div>
            
                      <h3 className="mt-3 fw-bold text-dark post-title">
                        Letraset Sheets Passage And Recently.
                      </h3>
                      <p className="text-secondary post-desc pt-3">
                        Law is a great career path if you want to build a broad skill set that includes everything from
                        critical thinking and strategic planning to communications. If you love rising to a challenge.
                      </p>
                              <a href="#" className="read-more-link">READ MORE...</a>
            
            
                 <div className="video-card">
                  <img
                    src="https://election-react.wpolive.com/static/media/img-3.f5acc38e894f53367dfe.jpg"
                    alt="Video Thumbnail"
                    className="video-img"
                  />
                  <div className="overlay"></div>
                  <div className="video-holder">
                    <button className="btn-wrap">
                      <span className="play-icon"><SlControlPlay />
            </span>
                    </button>
                  </div>
                </div>
            
                    {/* Metadata */}
                    <div className="meta d-flex align-items-center gap-3  text-muted small">
                        <span><i className="far fa-user"></i> By</span>
                        <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-comments"></i> Comments 35</span>
                        <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-calendar-alt"></i> 25 Sep 2023</span>
                      </div>
            
                    {/* Title + Content */}
                    <h4 className="blog-title mt-3 post-title">Liberty Divided Over Criticism Justice League</h4>
                    <p className="blog-desc mt-4">
                      Law is a great career path if you want to build a broad skill set that includes everything from
                      critical thinking and strategic planning to communications. If you love rising to a challenge.
                    </p>
            
                    {/* Read More */}
                              <a href="#" className="read-more-link">READ MORE...</a>
            
                 <nav className="mt-4">
                      <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">‹</a></li>
                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">›</a></li>
                      </ul>
                    </nav>
            
                              
            
                    </div>
            
          </div>
        </div>
      </div>

   
   );
}

export default Fullwidth
