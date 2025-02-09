import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Admin_url } from './Service'; // Replace with the actual path to Admin_url
import DonateForm from './DonateForm';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    axios
      .get(`${Admin_url}/campaigns`) // Replace with your actual API endpoint
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error('Error fetching campaigns:', error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid" style={{ marginLeft: '250px', paddingTop: '20px' }}>
        <style>
          {`
            .scrollable-container {
              max-height: calc(100vh - 120px);
              overflow-y: auto;
              padding-right: 10px;
            }

            .campaign-container {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 24px;
              padding: 20px;
            }

            .campaign-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              display: flex;
              flex-direction: column;
            }

            .campaign-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
            }

            .image-container {
              position: relative;
              width: 100%;
              padding-top: 66.67%;
              overflow: hidden;
            }

            .campaign-banner {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }

            .campaign-card:hover .campaign-banner {
              transform: scale(1.05);
            }

            .campaign-card-header {
              padding: 16px;
              background: white;
              border-bottom: 1px solid #f0f0f0;
            }

            .campaign-card-header h3 {
              margin: 0;
              font-size: 1.25rem;
              font-weight: 600;
              color: #1a1a1a;
            }

            .campaign-card-body {
              padding: 16px;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .campaign-info {
              display: flex;
              align-items: center;
              gap: 8px;
              color: #666;
              font-size: 0.9rem;
            }

            .progress-container {
              margin: 12px 0;
            }

            .progress-bar {
              height: 8px;
              background: #e9ecef;
              border-radius: 4px;
              overflow: hidden;
            }

            .progress-fill {
              height: 100%;
              background: linear-gradient(90deg, #28a745, #20c997);
              border-radius: 4px;
              transition: width 0.3s ease;
            }

            .campaign-card-footer {
              padding: 16px;
              background: #f8f9fa;
            }

            .btn-donate {
              width: 100%;
              padding: 12px;
              border: none;
              border-radius: 8px;
              background: linear-gradient(90deg, #28a745, #20c997);
              color: white;
              font-weight: 600;
              cursor: pointer;
              transition: opacity 0.2s ease;
            }

            .btn-donate:hover {
              opacity: 0.9;
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
                  : "https://via.placeholder.com/300x200";

                return (
                  <div className="campaign-card" key={campaign.id}>
                    <div className="image-container">
                      <img
                        src={imageUrl}
                        alt={campaign.name}
                        className="campaign-banner"
                      />
                    </div>
                    <div className="campaign-card-header">
                      <h3>{campaign.name}</h3>
                    </div>
                    <div className="campaign-card-body">
                      <div className="campaign-info">
                        <span>
                          <strong>Start Date:</strong>{" "}
                          {new Date(campaign.startDate).toLocaleDateString()}
                        </span>
                        <span>
                          <strong>End Date:</strong>{" "}
                          {new Date(campaign.endDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="progress-container">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${(campaign.donatedAmount /
                                campaign.targetAmount) *
                                100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="campaign-info">
                        <span>Donation Progress</span>
                        <span>
                          {Math.round(
                            (campaign.donatedAmount / campaign.targetAmount) *
                              100
                          )}
                          %
                        </span>
                      </div>
                    </div>
                    <div className="campaign-card-footer">
                      <button
                        className="btn-donate"
                        onClick={() => setSelectedCampaign(campaign)}
                      >
                        Donate Now
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {selectedCampaign && (
        <DonateForm
          campaign={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
        />
      )}
    </div>
  );
};

export default Campaigns;
