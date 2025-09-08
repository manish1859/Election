import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa6";
import m from './assets/logo-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" style={{backgroundColor:'transparent'}} className={`custom-navbar1 ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Toggle className='a' aria-controls="basic-navbar-nav"  />
          <Navbar.Brand as={NavLink} to="/">
        <img src={m} alt="Logo"className="navbar-logo"        />
        <span className="logo-text">Electian.</span>
      </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4 align-items-center">

            <Nav.Item className="dropdown">
              <Nav.Link as={NavLink} to="#" className="dropdown-toggle">HOME</Nav.Link>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/" >HOME STYLE 1</NavLink>
                <NavLink className="dropdown-item" to="/home-2">HOME STYLE 2</NavLink>
                <NavLink className="dropdown-item" to="/home-3">HOME STYLE 3</NavLink>
                <NavLink className="dropdown-item" to="/home-4">HOME STYLE 4</NavLink>
              </div>
            </Nav.Item>

            <Nav.Link  as={NavLink} to="/about">ABOUT US</Nav.Link>

            <Nav.Item className="dropdown">
              <Nav.Link as={NavLink} to="#" className="dropdown-toggle">EVENTS</Nav.Link>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/events">EVENTS </NavLink>
                <NavLink className="dropdown-item" to="/events/single">EVENTS SINGLE </NavLink>
              </div>
            </Nav.Item>

         <Nav.Item className="dropdown">
  <Nav.Link as={NavLink} to="#" className="dropdown-toggle">PAGES</Nav.Link>
  <div className="dropdown-menu">
    <NavLink className="dropdown-item" to="/gallery">GALLERY</NavLink>
    <NavLink className="dropdown-item" to="/volunteer">VOLUNTEER</NavLink>
    <NavLink className="dropdown-item" to="/testimonial">TESTIMONIAL</NavLink>
    <NavLink className="dropdown-item" to="/team">TEAM</NavLink>
    <NavLink className="dropdown-item" to="/team-single">TEAM SINGLE</NavLink>

    {/* Submenu inside Page 2 */}
    <div className="dropdown-submenu">
      <span className="dropdown-item submenu-toggle">SERVICE <FaChevronRight />
</span>
      <div className="dropdown-menu">
        <NavLink className="dropdown-item" to="/service1">SERVICE STYLE 1</NavLink>
        <NavLink className="dropdown-item" to="/service2">SERVICE STYLE 2</NavLink>
      </div>
    </div>
        <NavLink className="dropdown-item" to="/shop">SHOP</NavLink>
        <NavLink className="dropdown-item" to="/shop/single">SHOP SINGLE</NavLink>
        <NavLink className="dropdown-item" to="/cart">CART</NavLink>
        <NavLink className="dropdown-item" to="/checkout">CHECKOUT</NavLink>
        <NavLink className="dropdown-item" to="/faq">FAQ</NavLink>
        <div className="dropdown-submenu">
      <span className="dropdown-item submenu-toggle">AUTH PAGES <FaChevronRight />
</span>
      <div className="dropdown-menu">
        <NavLink className="dropdown-item" to="/login">LOGIN PAGE</NavLink>
        <NavLink className="dropdown-item" to="/register">REGISTER PAGE</NavLink>
        <NavLink className="dropdown-item" to="/forgot">FORGOT PASSWORD</NavLink>
      </div>

    </div>
            <NavLink className="dropdown-item" to="/404/error">404 ERROR</NavLink>

  </div>
</Nav.Item>
            <Nav.Item className="dropdown">
              <Nav.Link as={NavLink} to="#" className="dropdown-toggle">BLOG</Nav.Link>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/blogright">Blog RIGHT SIDEBAR</NavLink>
                <NavLink className="dropdown-item" to="/blogleft">Blog LEFT SIDEBAR</NavLink>
                <NavLink className="dropdown-item" to="/fullwidth">BLOG FULLWIDTH</NavLink>
                 <div className="dropdown-submenu">
      <span className="dropdown-item submenu-toggle">BLOG DETAILS <FaChevronRight style={{marginRight:'2px'}} />
   </span>
      <div className="dropdown-menu">
        <NavLink className="dropdown-item" to="/detailsright">BLOG DETAILS RIGHT SIDERBAR</NavLink>
        <NavLink className="dropdown-item" to="/blog-single-left-sidebar/Letraset-Sheets-Passage-And-Recently">BLOG DETAILS LEFT SIDEBAR</NavLink>
        <NavLink className="dropdown-item" to="/blog-single-fullwidth/Letraset-Sheets-Passage-And-Recently">BLOG DETAILS FULLWIDTH</NavLink>
      </div>

    </div>
              </div>
            </Nav.Item>

            <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>

          </Nav>

        </Navbar.Collapse>
        <div className="navbar-btn-container">
  <NavLink to="/donate" className="navbar-btn">
<span className='user1'>MAKE DONATION</span><FaUser className='user2'/>  </NavLink>
</div>
      </Container>
    </Navbar>
  );
};

export default Header;

