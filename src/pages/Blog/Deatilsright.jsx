import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { abc } from '../../Parent';
import { GoDotFill } from "react-icons/go";
import m from './lady.jpeg';
import img1 from './use1.jpeg'
import img2 from './user2.jpeg'
import img3 from './user3.jpeg'


const Deatilsright = () => {
 const { pageTitle, setPageTitle } = useContext(abc);

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);
    const comments = [
    {
      img: img1,
      name: "John Abraham",
      date: "January 12,2022 At 9:00am",
      text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
    },
    {
      img: img2,
      name: "Lily Watson",
      date: "January 12,2022 At 9:00am",
      text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
    },
    {
      img: img3,
      name: "John Abraham",
      date: "January 12,2022 At 9:00am",
      text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
    },
    {
      img: img1,
      name: "John Abraham",
      date: "January 12,2022 At 9:00am",
      text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
    }
  ];

  return (
    <>
    <div className="banner">
      <div className="banner-overlay">
        <h1>Letraset Sheets Passage And Recently.</h1>
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
            className="img-fluid rounded"/>

          <div className="meta d-flex align-items-center gap-3  text-muted small">
            <span><i className="far fa-user"></i> By</span>
            <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-comments"></i> Comments 35</span>
            <span><GoDotFill style={{color:'#e63946'}} /> <i className="far fa-calendar-alt"></i> 25 Sep 2023</span>
          </div>

          <h3 className="mt-3 fw-bold text-dark post-title ">
            Letraset Sheets Passage And Recently.
          </h3>
          <p className="text-secondary post-desc pt-4">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.
          </p>
 <div className="quote-section">
      <div className="quote-card">
        <div className="quote-bubble">
          <span className="quote-mark">❛❛</span>
        </div>

        <p className="quote-text">
          <a href="#">
            Combined with a handful of model sentence structures,
          </a>{" "}
          <a href="#">
            generate Lorem Ipsum which looks reasonable.
          </a>{" "}
          <a href="#">
            The generated Lorem Ipsum is therefore always free from repetition,
          </a>{" "}
          <a href="#">
            injected humour, or non-characteristic words etc.
          </a>
        </p>
      </div>
    </div>
    <p className="text-secondary post-desc pt-4">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p>

    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <img src="https://election-react.wpolive.com/static/media/1.5766a3eb67af486e0de6.jpg" alt="" style={{width:'100%'}} />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <img src="https://election-react.wpolive.com/static/media/2.2f79b90e155ab0073713.jpg" alt="" style={{width:'100%'}} />
      </div>
    </div>
        <div className="post-detail">

      {/* Share Tags */}
      <div className="share-tags">
        <span className="share-label">SHARE:</span>
        <button className="tag-btn">ELECTION</button>
        <button className="tag-btn">VOTE</button>
        <button className="tag-btn">POLITICAL</button>
      </div>

      <hr />

      {/* Social Links */}
      <div className="social-share">
        <span className="share-label">SHARE:</span>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>
        <a href="#">Pinterest</a>
      </div>

      {/* Author Section */}
      <div className="author-section">
        <img src={m} alt="Author" className="author-img" />
        <div className="author-info">
          <h5>
            Autho:Jenny Watson
          </h5>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
          <div className="author-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Prev & Next Post */}
      <div className="post-navigation">
        <div className="prev-post">
          <span className="nav-label">← PREVIOUS POST</span>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </div>
        <div className="next-post">
          <span className="nav-label">NEXT POST →</span>
          <p>
            Dignissimos ducimus qui blanditiis praesentiu deleniti atque
            corrupti quos dolores
          </p>
        </div>
      </div>
    </div>
       <div className="details-comments-section container py-4">
      <h6 className="details-comments-title mb-4">COMMENTS</h6>

      {/* Comments List */}
      {comments.map((comment, index) => (
        <div key={index} className="details-comment-item mb-4 pb-3 border-bottom">
          <div className="d-flex">
            <img src={comment.img} alt={comment.name} className="details-comment-img me-3" />
            <div>
              <h6 className="details-comment-name mb-1">
                {comment.name}{" "}
                <span className="details-comment-date">{comment.date}</span>
              </h6>
              <p className="details-comment-text mb-1">{comment.text}</p>
              <a href="#" className="details-comment-reply">REPLY</a>
            </div>
          </div>
        </div>
      ))}

      {/* Post Comment Form */}
      <div className="details-post-comment mt-5">
        <h6 className="details-post-title mb-3">POST COMMENTS</h6>
        <form>
          <div className="mb-3">
            <textarea
              className="form-control details-form-textarea"
              placeholder="Write Your Comments..."
              rows="4"
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input type="text" className="form-control details-form-input" placeholder="Website" />
            </div>
            <div className="col-md-4 mb-3">
              <input type="text" className="form-control details-form-input" placeholder="Name" />
            </div>
            <div className="col-md-4 mb-3">
              <input type="email" className="form-control details-form-input" placeholder="Email" />
            </div>
          </div>
          <button type="submit" className="btn details-form-btn">POST COMMENT</button>
        </form>
      </div>
    </div>


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
  <div className="search-box mb-4" >
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
}

export default Deatilsright
