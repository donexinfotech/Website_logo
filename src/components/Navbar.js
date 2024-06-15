import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href='/'>LOGO</a>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href='/'>Home</a>
        </li>
        <li className="navbar-item">
          <a href='/'>About</a>
        </li>
        <li className="navbar-item">
          <a href='/'>Services</a>
        </li>
        <li className="navbar-item">
          <a href='/'>Contact Us</a>
        </li>
        <li className="navbar-item">
          <a href='/'>Demo</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
