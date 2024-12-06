// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-white" to="/home">
        <i className="fas fa-hands-helping"></i> HelpHub
      </Link>

      <Link className="nav-link text-white" to="/" style={{ marginLeft: '20px' , marginRight:'370px'}}>
        <i className="fas fa-home"></i> Home
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin" style={{ marginLeft: '370px' }}>
              <i className="fas fa-user-shield"></i> Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              <i className="fas fa-hand-holding-heart"></i> Donor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/logistics/dashboard">
              <i className="fas fa-truck"></i> Logistics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              <i className="fas fa-info-circle"></i> About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/signup">
              <i className="fas fa-user-plus"></i> Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
