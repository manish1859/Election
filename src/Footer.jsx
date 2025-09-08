import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className='color'></div>
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-column about">
                    <h2 className="logo">
                        <img src='https://election-react.wpolive.com/static/media/logo-s2.7e48c7ebb3f93f62752eaa8070a2843a.svg' />
                    </h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, make specimen book.</p>
                    <div className="social-icons">
                        <FaFacebookF className='fs-2'/>
                        <FaTwitter className='fs-2'/>
                        <FaInstagram className='fs-2'/>
                        <FaGooglePlusG className='fs-2'/>
                    </div>
                </div>

                <div className="footer-column links">
                    <h3>QUICK LINKS:</h3>
                    <ul>
                        <li>Home</li>
                        <li>Blog Post</li>
                        <li>Donate</li>
                        <li>Members</li>
                        <li>Events</li>
                    </ul>
                </div>

                <div className="footer-column contact">
                    <h3>CONTACT US</h3>
                    <p><FaMapMarkerAlt /> 68D, Belsion Town 2365 <br /> Fna city, LH 3656, USA</p>
                    <p><FaPhoneAlt /> +8 (123) 123 456 789 <br /> +8 (123) 123 456 789</p>
                    <p><FaEnvelope /> electian@gmail.com</p>
                </div>

                <div className="footer-column newsletter">
                    <h3>NEWSLETTER:</h3>
                    <p>Lorem Ipsum has been the industry standard text ever since the printer took.</p>
                    <div className="newsletter-box">
                        <input type="email" placeholder="Enter your email" />
                        <button><FaPaperPlane /></button>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Copyright © 2023 Electian by <strong>wpOceans</strong>. All Rights Reserved.</p>
            </div>
        </footer>
        </>
    );
};

export default Footer;