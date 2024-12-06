import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DonorNavbar = ({ logout }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(); // Call the logout function passed as prop
    navigate('/'); // Navigate to the home page
  };
  
  return (
    <nav className="d-flex flex-column bg-dark sidebar" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
      <div className="navbar-brand text-white text-center py-3">
        <i className="fas fa-hands-helping fa-2x"></i><br />
        <strong>HelpHub Donor</strong>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/donor/dash">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/donor/donate">
            <i className="fas fa-hand-holding-heart"></i> Make a Donation
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/donor/campaigns">
            <i className="fas fa-gift"></i> View Campaigns
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/profile">
            <i className="fas fa-user"></i> My Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/donor/history">
            <i className="fas fa-history"></i> Donation History
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/donor/contact">
            <i className="fas fa-envelope"></i> Contact Support
          </Link>
        </li>
        <li className="nav-item">
          <button className="nav-link text-white" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DonorNavbar;
