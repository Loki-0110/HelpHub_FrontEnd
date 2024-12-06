import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEdit, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Donor_url } from './Service';

const DonorProfile = () => {
  const [donor, setDonor] = useState(null); // State to store donor data

  // Fetch donor data when component mounts
  useEffect(() => {
    axios.get(`${Donor_url}/profile`, { withCredentials: true }) // withCredentials ensures the session cookie is sent
      .then(response => {
        setDonor(response.data); // Update state with donor data from backend
      })
      .catch(error => {
        console.error("There was an error fetching the donor data!", error);
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  if (!donor) {
    return <div>Loading...</div>; // Display loading until data is fetched
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="sidebar bg-dark text-white p-3">
        {/* Add your sidebar content here */}
      </div>

      <div className="content flex-grow-1" style={{ marginLeft: '250px', padding: '20px', width: 'calc(100% - 250px)' }}>
        <div className="card">
          <div className="profile-header bg-primary text-white p-5 text-center">
            <h2>{donor ? `${donor.username}'s Profile` : "Profile Not Available"}</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="profile-image rounded-circle border-white"
              style={{ width: "150px", height: "150px", border: "5px solid white" }}
            />
            <h3>{donor.username}</h3>
            <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> {donor.email}</p>
          </div>

          <div className="profile-content p-4 bg-white rounded shadow-sm">
            <h5>Profile Details</h5>
            <hr />
            <div className="row mb-3">
              <div className="col-md-6">
                <strong><FontAwesomeIcon icon={faUser} className="icon" /> Username:</strong> <span>{donor.username}</span>
              </div>
              <div className="col-md-6">
                <strong><FontAwesomeIcon icon={faEnvelope} className="icon" /> Email:</strong> <span>{donor.email}</span>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="stat">
              <h5>Achievements</h5>
              <div className="badge">First Donation Made</div>
              <div className="badge">Community Contributor</div>
              <div className="badge">Top Donor of the Month</div>
            </div>

            {/* Donation Score Section */}
            <div className="stat">
              <h5>Score</h5>
              <p className="value" style={{ fontSize: "24px", fontWeight: "bold" }}>{donor.donationsCount}</p>
              <small>Donations Made</small>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/edit-profile" className="btn btn-success">
                <FontAwesomeIcon icon={faEdit} className="icon" /> Edit Profile
              </Link>
              <Link to="/share-profile" className="btn btn-success ml-3">
                <FontAwesomeIcon icon={faShareAlt} className="icon" /> Share Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer py-4 bg-dark text-white text-center">
        <p>&copy; 2024 HelpHub. All rights reserved.</p>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fab fa-facebook" style={{ color: 'white' }}></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2" style={{ fontSize: '15px' }}>X</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fab fa-instagram ml-2" style={{ color: 'white' }}></a>
        </p>
      </footer>
    </div>
  );
};

export default DonorProfile;
