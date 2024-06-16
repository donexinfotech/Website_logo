import React from 'react';
import './Navbar.css';

const scrollToSection = (id, event) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.offsetTop;
    window.scrollTo({
      top: elementPosition - 75,
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary card shadow-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand ml" href="/#" onClick={(e) => scrollToSection('home', e)}>Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-flex mr" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={(e) => scrollToSection('home', e)}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={(e) => scrollToSection('about', e)}>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={(e) => scrollToSection('services', e)}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={(e) => scrollToSection('contact', e)}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
