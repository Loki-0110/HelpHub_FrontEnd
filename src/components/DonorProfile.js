import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Donor_url } from "./Service";
import DonorNavbar from "./DonorNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faEdit, faShareAlt, faAward, faMoon, faSun, faClock } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion"; // Animation Library

const DonorProfile = () => {
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${Donor_url}/profile`, { withCredentials: true })
      .then((response) => {
        setDonor(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching donor data:", error);
        setLoading(false);
        navigate("/login");
      });

    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  if (loading) return <div style={styles.loading}>Loading...</div>;
  if (!donor) return <div style={styles.errorMessage}>Profile not found or unauthorized access.</div>;

  return (
    <div className={`d-flex ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <DonorNavbar logout={() => navigate("/")} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.profileContainer}
      >
        <div style={{ ...styles.profileCard, backgroundColor: darkMode ? "#222" : "#fff" }} className="shadow-lg p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={styles.heading}>{donor.username}'s Profile</h2>
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              style={{ cursor: "pointer", fontSize: "24px" }}
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>

          <p className="text-muted">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> {donor.email}
          </p>

          <h5 style={styles.sectionTitle}>Profile Details</h5>
          <hr />
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>
                <FontAwesomeIcon icon={faUser} className="me-2" /> Username:
              </strong>{" "}
              {donor.username}
            </div>
            <div className="col-md-6">
              <strong>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email:
              </strong>{" "}
              {donor.email}
            </div>
          </div>

          <h5 style={styles.sectionTitle}>Achievements</h5>
          <motion.div whileHover={{ scale: 1.1 }} className="badge bg-success text-white me-2" style={styles.badge}>
            First Donation Made
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="badge bg-info text-white me-2" style={styles.badge}>
            Community Contributor
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="badge bg-warning text-dark" style={styles.badge}>
            Top Donor of the Month
          </motion.div>

          <h5 className="mt-4" style={styles.sectionTitle}>Donation Score</h5>
          <p style={styles.donationScore}>{donor.donationsCount}</p>
          <div className="progress">
            <motion.div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(donor.donationsCount, 100)}%` }}
              transition={{ duration: 1.5 }}
              aria-valuenow={donor.donationsCount}
              aria-valuemin="0"
              aria-valuemax="100"
            ></motion.div>
          </div>

          <h5 className="mt-4" style={styles.sectionTitle}>Donation Streak</h5>
          <p style={styles.donationScore}>{donor.donationStreak} days</p>

          <h5 className="mt-4" style={styles.sectionTitle}>Current Time</h5>
          <p className="text-center">
            <FontAwesomeIcon icon={faClock} className="me-2" /> {currentTime.toLocaleTimeString()}
          </p>

          <div className="text-center mt-4">
            <Link to="/edit-profile" className="btn btn-primary me-2" style={styles.button}>
              <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit Profile
            </Link>
            <Link to="/share-profile" className="btn btn-secondary" style={styles.button}>
              <FontAwesomeIcon icon={faShareAlt} className="me-2" /> Share Profile
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  profileContainer: {
    margin: "auto",
    padding: "40px",
    width: "100%",
    maxWidth: "900px",
  },
  profileCard: {
    borderRadius: "15px",
    overflow: "hidden",
    transition: "0.3s",
    padding: "20px",
  },
  heading: {
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#007bff",
    fontWeight: "bold",
  },
  badge: {
    padding: "8px 12px",
    fontSize: "14px",
    borderRadius: "20px",
    margin: "5px",
    transition: "0.3s",
    cursor: "pointer",
  },
  donationScore: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#dc3545",
  },
  button: {
    transition: "0.3s",
    fontSize: "16px",
    padding: "10px 15px",
    borderRadius: "8px",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#007bff",
  },
  errorMessage: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#dc3545",
  },
};

export default DonorProfile;
