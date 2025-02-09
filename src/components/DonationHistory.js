import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';
import DonorNavbar from './DonorNavbar'; // Navbar remains
import styled from 'styled-components'; // CSS within the file

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('http://localhost:2021/api/donations/all');
        if (!response.ok) throw new Error('Failed to fetch donations');

        const data = await response.json();
        setDonations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  return (
    <>
      <DonorNavbar /> {/* Top Navigation */}
      <Container>
        <h2>My Donation History</h2>

        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && donations.length === 0 && (
          <Alert variant="warning" className="text-center">No donations found.</Alert>
        )}

        {!loading && donations.length > 0 && (
          <StyledTable striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Amount (₹)</th>
                <th>Payment Method</th>
                <th>Donation Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={donation.id}>
                  <td>{index + 1}</td>
                  <td>{donation.name}</td>
                  <td>{donation.phone}</td>
                  <td>{donation.amount}</td>
                  <td>{donation.paymentMethod}</td>
                  <td>{donation.donationMessage || '—'}</td>
                  <td>{new Date(donation.timestamp).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        )}
      </Container>
    </>
  );
};

// Styled Components for CSS
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const StyledTable = styled(Table)`
  margin-top: 20px;
  th {
    background-color: #343a40;
    color: white;
    text-align: center;
  }
  td {
    text-align: center;
  }
`;

export default DonationHistory;
