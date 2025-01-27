import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Admin_url } from './Service';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios
      .get(`${Admin_url}/campaigns`)
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error('Error fetching campaigns:', error);
      });
  }, []);

  return (
    <div>
      <div
        className="container-fluid"
        style={{ marginLeft: '250px', paddingTop: '20px' }} // Offset for sidebar
      >
        <style>
          {`
           .scrollable-container {
             max-height: calc(100vh - 120px);
             overflow-y: auto;
             padding-right: 10px;
           }

           .campaign-container {
             display: flex;
             flex-wrap: wrap;
             gap: 20px;
             justify-content: flex-start;
           }

           .campaign-card {
             position: relative;
             border-radius: 15px;
             overflow: hidden;
             width: calc(25% - 20px); /* Reduced width to fit more cards */
             max-width: 350px; /* Set maximum width */
             background: white;
             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
             transform: scale(1);
             transition: all 0.3s ease;
           }

           .campaign-card:hover {
             transform: scale(1.05);
             box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
           }

           /* Adjust the campaign banner image styling */
           .campaign-banner {
             width: 100%;
             height: 200px; /* Reduced height for the banner */
             background-position: center center; /* Ensures the image is centered */
             background-size: cover; /* Ensures the image covers the area without stretching */
             position: relative;
             transition: transform 0.5s ease-out;
           }

           .campaign-banner:hover {
             transform: scale(1.05);
           }

           .campaign-card-header {
             background: #fff;
             padding: 15px;
             text-align: center;
             font-size: 18px;
             font-weight: bold;
             color: #333;
           }

           .campaign-card-body {
             padding: 10px;
             display: flex;
             flex-direction: column;
             justify-content: space-between;
           }

           .campaign-card-body p {
             color: #555;
             font-size: 14px;
           }

           .progress-bar {
             background: linear-gradient(90deg, #28a745, #20c997);
             height: 6px;
             border-radius: 4px;
           }

           .campaign-card-footer {
             text-align: center;
             padding: 10px;
             background-color: #f7f7f7;
           }

           .btn-primary {
             background: linear-gradient(90deg, #28a745, #20c997);
             border: none;
             padding: 12px 25px;
             font-size: 16px;
             font-weight: bold;
             width: 100%;
             color: white;
             border-radius: 5px;
           }

           .btn-primary:hover {
             background: linear-gradient(90deg, #20c997, #28a745);
           }

           @media (max-width: 992px) {
             .campaign-card {
               width: calc(50% - 20px); /* Adjust card width for medium screens */
             }
           }

           @media (max-width: 576px) {
             .campaign-card {
               width: 100%; /* Full width on small screens */
             }
           }
          `}
        </style>
        <h2 className="text-center mb-4">Active Campaigns</h2>
        <div className="scrollable-container">
          <div className="campaign-container">
            {campaigns.length === 0 ? (
              <p className="text-center">No campaigns available</p>
            ) : (
              campaigns.map((campaign) => {
                let mimeType = "image/jpeg";
                const imageData = campaign.image;

                if (imageData) {
                  if (imageData.startsWith("/9j/")) {
                    mimeType = "image/jpeg";
                  } else if (imageData.startsWith("iVBORw0KGgo")) {
                    mimeType = "image/png";
                  }
                }

                const imageUrl = imageData
                  ? `data:${mimeType};base64,${imageData}`
                  : "https://via.placeholder.com/150";

                const goal = 100000;
                const raised = 50000;
                const progress = goal > 0 ? ((raised / goal) * 100).toFixed(2) : 0;

                return (
                  <div key={campaign.id} className="campaign-card">
                    <div
                      className="campaign-banner"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                      }}
                    ></div>
                    <div className="campaign-card-header">{campaign.name}</div>
                    <div className="campaign-card-body">
                      <p>{campaign.description}</p>
                      <p>
                        <i className="fas fa-calendar-alt"></i>{' '}
                        {new Date(campaign.startDate).toLocaleDateString()} -{' '}
                        {new Date(campaign.endDate).toLocaleDateString()}
                      </p>
                      <p>
                        <i className="fas fa-chart-line"></i> Goal: ₹{goal.toLocaleString()}
                      </p>
                      <p>
                        <i className="fas fa-donate"></i> Raised: ₹{raised.toLocaleString()}
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-muted text-right">{progress}% funded</p>
                    </div>
                    <div className="campaign-card-footer">
                      <button className="btn-primary">Donate Now</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
