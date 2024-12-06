import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import LogisticDashboard from "./LogisticDashboard";
import LogisticDeliveries from "./LogisticDeliveries";
import LogisticDeadlines from "./LogisticDeadlines";
import LogisticIssues from "./LogisticIssues";
import "bootstrap/dist/css/bootstrap.min.css";

const Logistics = () => {
  const styles = {
    sidebar: {
      width: "200px",
      backgroundColor: "#111",
      padding: "20px",
      height: "100vh",
    },
    navItem: {
      textDecoration: "none",
      color: "#ddd",
      padding: "8px",
      display: "block",
      borderRadius: "5px",
      marginBottom: "5px",
      fontSize: "1em",
      textAlign: "center",
    },
    content: {
      flexGrow: 1,
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      overflowY: "auto",
    },
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Navigation */}
      <div style={styles.sidebar}>
        <h2 style={{ color: "#fff", textAlign: "center" }}>Logistics</h2>
        <Link to="/logistics/dashboard" style={styles.navItem}>
          Dashboard
        </Link>
        <Link to="/logistics/deliveries" style={styles.navItem}>
          Deliveries
        </Link>
        <Link to="/logistics/deadlines" style={styles.navItem}>
          Deadlines
        </Link>
        <Link to="/logistics/issues" style={styles.navItem}>
          Issues
        </Link>
        <Link to="/" style={styles.navItem}>
          Log-Out
        </Link>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <Routes>
          <Route path="/dashboard" element={<LogisticDashboard />} />
          <Route path="/deliveries" element={<LogisticDeliveries />} />
          <Route path="/deadlines" element={<LogisticDeadlines />} />
          <Route path="/issues" element={<LogisticIssues />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Logistics;
