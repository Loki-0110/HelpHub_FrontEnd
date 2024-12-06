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
              max-height: calc(100vh - 120px); /* Adjust based on header height */
              overflow-y: auto;
              padding-right: 10px; /* Avoid scrollbar overlap */
            }
            .campaign-container {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              justify-content: flex-start; /* Align cards left */
            }
            .campaign-card {
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              width: calc(33.33% - 20px); /* 3 cards per row with spacing */
              max-width: 400px;
              background: white;
              display: flex;
              flex-direction: column;
            }
            .campaign-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
            }
            .campaign-banner {
              height: 150px;
              background-size: cover;
              background-position: center;
            }
            .campaign-badge {
              position: absolute;
              top: 10px;
              right: 10px;
              background: linear-gradient(90deg, #ff6b6b, #f09433);
              color: white;
              padding: 5px 10px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: bold;
            }
            .campaign-card-header {
              background: white;
              text-align: center;
              padding: 10px;
              font-size: 16px;
              font-weight: bold;
            }
            .campaign-card-body {
              padding: 15px;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .progress-bar {
              background: linear-gradient(90deg, #28a745, #20c997);
              height: 8px;
              border-radius: 4px;
            }
            .campaign-card-footer {
              text-align: center;
              padding: 10px;
            }
            .btn-primary {
              background: linear-gradient(90deg, #28a745, #20c997);
              border: none;
              padding: 10px 20px;
              font-size: 14px;
              font-weight: bold;
              width: 100%;
            }
            @media (max-width: 992px) {
              .campaign-card {
                width: calc(50% - 20px); /* 2 cards per row on medium screens */
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
                const goal = 100000;
                const raised = 50000;
                const progress = goal > 0 ? ((raised / goal) * 100).toFixed(2) : 0;

                return (
                  <div key={campaign.id} className="campaign-card">
                    <div
                      className="campaign-banner"
                      style={{
                        backgroundImage:
                          'url(https://www.careinsurance.com/upload_master/media/posts/June2020/IQKrrYI3nqo0i9PNqO7W.jpg)',
                      }}
                    >
                      <span className="campaign-badge">
                        {new Date(campaign.endDate) > new Date()
                          ? 'Active'
                          : 'Completed'}
                      </span>
                    </div>
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
                      <button className="btn btn-primary">Donate Now</button>
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
