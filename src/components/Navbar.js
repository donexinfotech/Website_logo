import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Demo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
