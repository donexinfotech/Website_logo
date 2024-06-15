import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href='/'>LOGO</a>
        </div>
        <div className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </div>
        <ul className={`navbar-links ${sidebarOpen ? 'open' : ''}`}>
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
    </>
  );
};

export default Navbar;
