import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary card shadow-lg navbar-custom">
        <div class="container-fluid">
          <a class="navbar-brand ml" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav-flex mr" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
