import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { abc } from '../../Parent';
import { SlControlPlay } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";

import m from './lady.jpeg';

const Blogright = () => {
   const { pageTitle, setPageTitle } = useContext(abc);
 
   useEffect(() => {
     setPageTitle("Home");
   }, [setPageTitle]);
  return (
    <>
         <div className="banner">
       <div className="banner-overlay">
         <h1>Latest News</h1>
         <p style={{ color: 'white' }}>
           <Link to='/' className='parenthome'>{pageTitle}</Link> • Blog
         </p>
       </div>
     </div>
    <div className="container mt-5 blo-right">
      <div className="row">
        {/* Left content */}
        <div className="col-lg-8 col-md-12 mb-4">
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



        {/* Right sidebar */}
<div className="col-lg-4 col-md-12  ">
  {/* Author Card */}
  <div className="author-card text-center p-4 rounded mb-4">
    <img src={m} alt="Author" className="author-img mb-3" />
    <h5 className="fw-bold">Jenny Watson</h5>
    <p className="text-muted small">
      Hi! beautiful people. I'm an author of this blog. Read our post - stay with us
    </p>
    <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
      <span className="icon-circle"><i className="fab fa-facebook-f"></i></span>
      <span className="icon-circle"><i className="fab fa-twitter"></i></span>
      <span className="icon-circle"><i className="fab fa-linkedin-in"></i></span>
      <span className="icon-circle"><i className="fab fa-pinterest-p"></i></span>
    </div>
  </div>

  {/* Search Box */}
  <div className="search-box mb-4">
    <h6 className="fw-bold mb-2 search">Search Here</h6>
    <div className="search-divider">
      <div className="red-line"></div>
      <div className="gray-line"></div>
    </div>
    <div className="custom-search-box mt-3">
      <input
        type="text"
        className="custom-search-input"
        placeholder="Search Post.."
      />
      <button className="custom-search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>

  {/* Post Categories */}
  <div className="sidebar-section mb-4">
    <h4 className="sidebar-title">Post Categories</h4>
    <div className="search-divider2">
      <div className="red-line"></div>
      <div className="gray-line"></div>
    </div>
    <ul className="category-list pt-3">
      {[
        { name: 'Election', count: 5 },
        { name: 'Events', count: 7 },
        { name: 'Politics', count: 3 },
        { name: 'Program', count: 6 },
        { name: 'Family', count: 2 },
        { name: 'Social', count: 8 },
      ].map((item, index) => (
        <li key={index}>
          <span>{item.name}</span>
          <span className="badge">{item.count}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Related Posts */}
  <div className="sidebar-section mb-4">
    <h4 className="sidebar-title">Related Posts</h4>
    <div className="search-divider2">
      <div className="red-line"></div>
      <div className="gray-line"></div>
    </div>
    <div className="related-posts pt-3">
      {[
        {
          img: "https://election-react.wpolive.com/static/media/img-1.83548eccfdeb185da949.jpg",
          title: "Letraset Sheets Passage And Recently.",
          date: "25 Sep 2023"
        },
        {
          img: "https://election-react.wpolive.com/static/media/img-2.7ea5428df9d596b93bb6.jpg",
          title: "Politics is why we can’t have nice things.",
          date: "23 Sep 2023"
        },
        {
          img: "https://election-react.wpolive.com/static/media/img-3.8fa16f1ce271796f6059.jpg",
          title: "Politics is why we can’t have nice things.",
          date: "23 Sep 2023"
        }
      ].map((post, idx) => (
        <div className="related-post" key={idx}>
          <img src={post.img} alt={post.title} />
          <div>
            <p className="post-title-right">{post.title}</p>
            <span className="post-date">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Tags */}
  <div className="tags-section mb-4">
    <h3 className="tags-title">Tags</h3>
    <div className="search-divider2">
      <div className="red-line"></div>
      <div className="gray-line"></div>
    </div>
    <div className="tags-list pt-3 flex-wrap">
      {[
        "ELECTION", "CAMPAIGN", "STATEMENT", "POLITICS",
        "PRESS", "SOCIAL", "SECURITY", "VOTE"
      ].map((tag, index) => (
        <span key={index} className="tag-item">
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Advertisement */}
  <div className="advertisement">
    <img
      src="https://election-react.wpolive.com/static/media/bg-2.d92c1bd1795c3f3b0dc3.jpg"
      alt="Advertisement"
      className="ad-image"
    />
    <div className="ad-overlay">
      <div className="ad-text">
        Contact For<br /> Advertisment 270 x <br /> 310
        <div className="ad-arrow">→</div>
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
   
    
</>


  );
};
export default Blogright