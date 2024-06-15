import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>LOGO</Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Demo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
