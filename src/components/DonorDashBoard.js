import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import DonorNavbar from './DonorNavbar'; // Import the DonorNavbar

function DonorDashboard() {
  const chartRef = useRef(null); // Reference for the canvas
  const chartInstance = useRef(null); // Track the chart instance

  useEffect(() => {
    // If a chart already exists, destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Initialize the donation chart
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Donations',
            data: [1200, 1500, 800, 2000, 1500],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Cleanup function to destroy chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run only once

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <DonorNavbar logout={() => console.log('Logged out')} />

      {/* Main Content */}
      <div style={{ marginLeft: '250px', width: '100%' }}>
        {/* Header */}
        <header className="header py-4 text-center" style={{ backgroundColor: '#f8f9fa', color: 'black' }}>
          <div className="container">
            <h1>Donor Dashboard</h1>
            <p>Manage your donations and track your impact.</p>
          </div>
        </header>

        <div className="container dashboard-content my-5">
          <div className="row">
            {/* Donation Trends */}
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header">
                  <h5>
                    <i className="fas fa-chart-line"></i> Donation Trends
                  </h5>
                </div>
                <div className="card-body">
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>
            </div>

            {/* Upcoming Campaigns */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header">
                  <h5>
                    <i className="fas fa-calendar-alt"></i> Upcoming Campaigns
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Campaign 1: <span className="badge badge-success">Ongoing</span>
                    </li>
                    <li className="list-group-item">
                      Campaign 2: <span className="badge badge-info">Coming Soon</span>
                    </li>
                    <li className="list-group-item">
                      Campaign 3: <span className="badge badge-danger">Cancelled</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Recent Donations */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header">
                  <h5>
                    <i className="fas fa-hands-helping"></i> Recent Donations & Impact
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Your Donation: <strong>2500 INR</strong> - Provided meals for 50 families
                    </li>
                    <li className="list-group-item">
                      Your Donation: <strong>1000 INR</strong> - Supplied hygiene kits for 20 individuals
                    </li>
                    <li className="list-group-item">
                      Your Donation: <strong>500 INR</strong> - Supported school supplies for 10 children
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header">
                  <h5>
                    <i className="fas fa-headset"></i> Contact Support & Resources
                  </h5>
                </div>
                <div className="card-body">
                  <p>If you have any questions or need assistance, reach out to us!</p>
                  <p>
                    Email: <strong>support@helphub.com</strong>
                  </p>
                  <p>
                    Phone: <strong>+91 8899526314</strong>
                  </p>
                  <button className="btn btn-primary">
                    <i className="fas fa-envelope"></i> Get Support
                  </button>
                  <p className="mt-3">
                    <i className="fas fa-book-open"></i>{' '}
                    <a href="/resources/donor-guide.pdf" download>
                      Download Donor Guide
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Donor Achievements */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header">
                  <h5>
                    <i className="fas fa-trophy"></i> Donor Achievements
                  </h5>
                </div>
                <div className="card-body">
                  <p>Thank you for your continued support! Your contributions have helped us reach:</p>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <i className="fas fa-check-circle text-success"></i> Top Donor for June
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-gem text-warning"></i> Platinum Supporter Status
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-star text-primary"></i> Donor of the Year 2024
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      {/* Footer */}
      <footer className="footer bg-dark text-white py-2" style={{ position: "fixed", bottom: 0, left: "250px", width: "calc(100% - 250px)" }}>
        <div className="container d-flex justify-content-center">
          <div className="text-center">
            <p style={{ fontSize: "14px", marginBottom: "0" }}>&copy; 2024 HelpHub. All rights reserved.</p>
            <p style={{ fontSize: "14px" }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="fab fa-facebook" style={{ color: "white" }}></a>{" "}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white" style={{ color: "white" }}>
                X
              </a>{" "}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="fab fa-instagram" style={{ color: "white" }}></a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DonorDashboard;
