import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { abc } from "../../Parent";
import img1 from '../eventt/image1.jpg'
import img2 from '../eventt/image2.jpg'
import visa from '../Donate/Image/visa.png'
import mastercard from '../Donate/Image/mastercard.png'
import skrill from '../Donate/Image/skrill.png'
import Paypal from '../Donate/Image/PAypal.png'
import img3 from '../Blog/use1.jpeg'
import img4 from '../Blog/user2.jpeg'
import img5 from '../Blog/user3.jpeg'

const Eventsingal = () => {
  const { pageTitle, setPageTitle } = useContext(abc);
  const [tab, setTab] = useState("tab1");

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);
  const comments = [
         {
           img: img3,
           name: "John Abraham",
           date: "January 12,2022 At 9:00am",
           text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
         },
         {
           img: img4,
           name: "Lily Watson",
           date: "January 12,2022 At 9:00am",
           text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
         },
         {
           img: img5,
           name: "John Abraham",
           date: "January 12,2022 At 9:00am",
           text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
         },
         {
           img: img3,
           name: "John Abraham",
           date: "January 12,2022 At 9:00am",
           text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
         }
       ];

  return (
    <>
    <div className="banner">
      <div className="banner-overlay">
        <h1>Events</h1>
        <p style={{ color: 'white' }}>
          <Link to='/' className='parenthome'>{pageTitle}</Link> • Event
        </p>
      </div>
    </div>

      <div className="container eventsingal-main mt-5">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-8 col-md-12 mb-4">
            <img
              src="https://election-react.wpolive.com/static/media/img-1.c1c38a8af599b9bcbe23.jpg"
              alt=""
              className="w-100 rounded mb-3"
            />

            {/* Tabs */}
            <div className="eventsingal-tabs mb-4">
              <button
                onClick={() => setTab("tab1")}
                className={tab === "tab1" ? "active" : ""}
              >
                Description
              </button>
              <button
                onClick={() => setTab("tab2")}
                className={tab === "tab2" ? "active" : ""}
              >
                Donations
              </button>
              <button
                onClick={() => setTab("tab3")}
                className={tab === "tab3" ? "active" : ""}
              >
                Comments
              </button>
            </div>

            {/* Tab Content */}
            {tab === "tab1" && (
              <div className="eventsingal-description">
                <h4 className="mb-3">
                  Letraset Sheets Passage And Recently.
                </h4>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain.
                </p>
                <p>
                  These campaignings are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided.
                </p>
                <p>
                  But in certain circumstances and owing to the claims of duty
                  or the obligations of business it will frequently occur that
                  pleasures have to be repudiated and annoyances accepted. The
                  wise man therefore always holds in these matters to this
                  principle of selection: he rejects pleasures.
                </p>

                <h5 className="mt-4">Support for Woman’s April 2023</h5>
                <p>
                  These campaignings are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure.
                </p>

                <ul>
                  <li>The wise man therefore always holds in these matters.</li>
                  <li>
                    In a free hour, when our power of choice and when nothing.
                  </li>
                  <li>Else he endures pains to avoid worse pains.</li>
                  <li>
                    We denounce with righteous indignation and dislike men.
                  </li>
                  <li>Which is the same as saying through.</li>
                </ul>
              </div>
            )}

            {tab === "tab2" && (
              <div className="eventsingal-description">
                <h4>Donations</h4>
      <div className="donation">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="amount">
            <label
              htmlFor="amount"
              style={{ fontWeight: "bold", fontSize: "15px", color: "#031B4E" }}
            >
              Your Donation
            </label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Donation Amount"
              className="input-amount"
            />
          </div>
        </div>
        <div className="form-container">
          <h3 className="form-title">Details</h3>
          <form className="details-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Adress" className="form-input" />
            </div>
            <div className="form-row">
              <textarea
                placeholder="Message"
                className="form-textarea"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="form-container">
          <h4 className="payment-title">Choose Your Payment Method</h4>

          <div className="payment-options">
            <label>
              <input type="radio" name="method" /> Payment By Card
            </label>
            <label>
              <input type="radio" name="method" /> Offline Donation
            </label>
          </div>

          <div className="payment-icons">
            
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="MasterCard" />
            <img src={skrill} alt="Skrill" />
            <img src={Paypal} alt="PayPal" />
          </div>

          <div className="payment-fields">
            <input type="text" placeholder="Card holder Name" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Expire Date" />
          </div>
        </div>
      </div>              </div>
            )}

            {tab === "tab3" && (
              <div className="eventsingal-description">
                <h4>Comments</h4>
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
    </div>              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4 col-md-12">
            {/* Search Box */}
            <div className="eventsingal-search mb-4">
              <input type="text" placeholder="Search Post..." />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>

            {/* Related Posts */}
            <div className="eventsingal-related mb-4">
              <h5>Related Posts</h5>
              <div className="eventsingal-related-item">
                <img src={img1}
                  alt=""
                />
                <div>
                  <Link>Letraset Sheets Passage And Recently</Link>
                  <span>25 Sep 2023</span>
                </div>
              </div>
              <div className="eventsingal-related-item">
                <img src={img2}
                  alt=""
                />
                <div>
                  <Link>Politics is why we can’t have nice things</Link>
                  <span>23 Sep 2023</span>
                </div>
              </div>
              <div className="eventsingal-related-item">
                <img
                  src="https://election-react.wpolive.com/static/media/img-3.8fa16f1ce271796f6059.jpg"
                  alt=""
                />
                <div>
                  <Link>
                    Liberty Divided Over Criticism Justice League
                  </Link>
                  <span>21 Sep 2023</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="eventsingal-tags">
              <h5>Tags</h5>
              <div>
                <span>ELECTION</span>
                <span>CAMPAIGN</span>
                <span>STATEMENT</span>
                <span>POLITICS</span>
                <span>PRESS</span>
                <span>SOCIAL</span>
                <span>SECURITY</span>
                <span>VOTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventsingal;
