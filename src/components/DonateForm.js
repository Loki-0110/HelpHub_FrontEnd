import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faCreditCard, faRupeeSign, faTimes } from '@fortawesome/free-solid-svg-icons';
import image from '../images/image.png';

const DonateForm = ({ campaign, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    paymentMethod: '',
    donationMessage: '',
    amount: '',
    isRecurring: false,
  });

  const [donationStatus, setDonationStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDonate = () => {
    console.log('Donation Details:', formData);
    setDonationStatus('Thank you for your donation!');
    setTimeout(onClose, 2000);
  };

  const styles = {
    modalContent: {
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      animation: 'fadeIn 0.3s ease-in-out',
    },
    donateButton: {
      transition: 'background-color 0.3s ease-in-out, transform 0.2s',
      backgroundColor: '#28a745',
      border: 'none',
      color: 'white',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    },
    donateButtonHover: {
      backgroundColor: '#218838',
      transform: 'scale(1.1)',
    },
    modalHeader: {
      background: 'linear-gradient(135deg, #6f42c1, #e83e8c)',
      color: 'white',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      animation: 'slideIn 0.3s ease-in-out',
    },
    modalBody: {
      padding: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    impactImage: {
      width: '80%',
      height: 'auto',
      marginTop: '10px',
      marginBottom: '20px',
      transition: 'transform 0.3s ease-in-out',
    },
    impactImageHover: {
      transform: 'scale(1.05)',
    },
    recurringOption: {
      marginTop: '10px',
    },
    socialButton: {
      marginTop: '20px',
      backgroundColor: '#3b5998',
      color: 'white',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    progressBar: {
      height: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      marginTop: '20px',
    },
    progress: {
      height: '100%',
      width: '50%',
      backgroundColor: '#28a745',
      borderRadius: '10px',
    },
    formControl: {
      transition: 'border-color 0.3s ease-in-out',
    },
    formControlFocus: {
      borderColor: '#28a745',
      boxShadow: '0 0 5px rgba(40, 167, 69, 0.5)',
    },
  };

  return (
    <Modal show={true} onHide={onClose} centered style={styles.fadeIn}>
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title>
          <FontAwesomeIcon icon={faDonate} className="text-light" /> Donate to {campaign?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
        {campaign && (
          <>
            <p><strong>Description:</strong> {campaign.description}</p>
            <p><strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}</p>
          </>
        )}

        {/* Suggested Donation Amounts */}
        <h5>Suggested Donation Amounts</h5>
        <Button variant="outline-success" onClick={() => setFormData({ ...formData, amount: '500' })}>₹500</Button>
        <Button variant="outline-success" onClick={() => setFormData({ ...formData, amount: '1000' })}>₹1000</Button>
        <Button variant="outline-success" onClick={() => setFormData({ ...formData, amount: '5000' })}>₹5000</Button>

        {/* Donation Progress */}
        <div style={styles.progressBar}>
          <div style={styles.progress}></div>
        </div>

        {/* Impact Visual */}
        <h5>Impact of Your Donation</h5>
        <Image
          src={image}
          alt="Impact Image"
          style={styles.impactImage}
          onMouseEnter={(e) => e.target.style.transform = styles.impactImageHover.transform}
          onMouseLeave={(e) => e.target.style.transform = 'none'}
        />

        {/* Donation Form */}
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.formControl}
              onFocus={(e) => e.target.style = styles.formControlFocus}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.formControl}
              onFocus={(e) => e.target.style = styles.formControlFocus}
            />
          </Form.Group>

          <Form.Group controlId="paymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faCreditCard} />
              </InputGroup.Text>
              <Form.Control as="select" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                <option value="">Select a payment method</option>
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="upi">UPI</option>
              </Form.Control>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="amount">
            <Form.Label>Donation Amount</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faRupeeSign} />
              </InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Enter donation amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>

          {/* Recurring Donation Option */}
          <Form.Check
            type="checkbox"
            label="Make this a recurring donation"
            name="isRecurring"
            checked={formData.isRecurring}
            onChange={handleChange}
            style={styles.recurringOption}
          />

          <Form.Group controlId="donationMessage">
            <Form.Label>Message (Optional)</Form.Label>
            <InputGroup>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Say something"
                name="donationMessage"
                value={formData.donationMessage}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
        </Form>

        {donationStatus && <p style={{ color: '#28a745' }}>{donationStatus}</p>}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} /> Close
        </Button>
        <Button
          variant="success"
          onClick={handleDonate}
          style={styles.donateButton}
          onMouseEnter={(e) => e.target.style.transform = styles.donateButtonHover.transform}
          onMouseLeave={(e) => e.target.style.transform = 'none'}
        >
          <FontAwesomeIcon icon={faDonate} /> Donate Now
        </Button>
      </Modal.Footer>

      {/* Social Sharing Button */}
      <Button variant="primary" style={styles.socialButton} onClick={() => alert('Share your donation on social media!')}>
        Share Your Donation
      </Button>
    </Modal>
  );
};

export default DonateForm;
