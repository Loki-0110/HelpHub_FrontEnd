import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faCreditCard, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import image from '../images/image.png';

const DonateForm = ({ campaign, onClose, onDonateSuccess }) => {
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

  const handleDonate = async () => {
    try {
      const response = await fetch('http://localhost:2021/api/donations/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newDonatedAmount = campaign.donatedAmount + parseFloat(formData.amount);
        const updatedCampaign = {
          ...campaign,
          donatedAmount: newDonatedAmount,
          completed: true, // ✅ Always mark as completed immediately on donation
        };

        if (onDonateSuccess) {
          onDonateSuccess(updatedCampaign); // ✅ Notify parent component to update UI
        }

        setTimeout(onClose, 2000);
      } else {
        setDonationStatus('⚠️ Failed to process donation. Please try again.');
      }
    } catch (error) {
      setDonationStatus('❌ Error connecting to the server.');
      console.error('Donation Error:', error);
    }
  };

  

  return (
    <Modal show={true} onHide={onClose} centered>
      {/* Animated Header */}
      <Modal.Header style={styles.modalHeader} closeButton>
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Modal.Title>
            <FontAwesomeIcon icon={faDonate} style={styles.iconTitle} /> Donate to {campaign?.name}
          </Modal.Title>
        </motion.div>
      </Modal.Header>

      <Modal.Body style={styles.modalBody}>
        {campaign && (
          <>
            <p><strong>Description:</strong> {campaign.description}</p>
            <p><strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}</p>
          </>
        )}

        <h5>Suggested Donation Amounts</h5>
        <div style={styles.amountButtons}>
          {[500, 1000, 5000].map((amt) => (
            <motion.button
              key={amt}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-outline-success"
              style={styles.amountButton}
              onClick={() => setFormData({ ...formData, amount: amt.toString() })}
            >
              ₹{amt}
            </motion.button>
          ))}
        </div>

        <h5>Impact of Your Donation</h5>
        <Image src={image} style={styles.image} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Form.Group style={styles.formGroup}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group style={styles.formGroup}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </Form.Group>

          <Form.Group style={styles.formGroup}>
            <Form.Label>Donation Amount</Form.Label>
            <InputGroup>
              <InputGroup.Text><FontAwesomeIcon icon={faRupeeSign} /></InputGroup.Text>
              <Form.Control type="number" name="amount" value={formData.amount} onChange={handleChange} required />
            </InputGroup>
          </Form.Group>

          <Form.Group style={styles.formGroup}>
            <Form.Label>Payment Method</Form.Label>
            <Form.Control as="select" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
              <option value="">Select Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Net Banking">Net Banking</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="donationMessage" style={styles.formGroup}>
            <Form.Label>Donation Message (Optional)</Form.Label>
            <Form.Control as="textarea" rows={3} name="donationMessage" value={formData.donationMessage} onChange={handleChange} />
          </Form.Group>

          <Form.Group style={styles.checkboxGroup}>
            <Form.Check type="checkbox" label="Make this a recurring donation" name="isRecurring" checked={formData.isRecurring} onChange={handleChange} />
          </Form.Group>

          {donationStatus && (
            <motion.p style={styles.donationStatus} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {donationStatus}
            </motion.p>
          )}

          <motion.button
            className="btn btn-success"
            style={styles.donateButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDonate}
          >
            <FontAwesomeIcon icon={faCreditCard} /> Donate Now
          </motion.button>
        </motion.div>
      </Modal.Body>
    </Modal>
  );
};

// Enhanced CSS Styles
const styles = {
  modalHeader: {
    background: 'linear-gradient(to right, #007bff, #0056b3)',
    color: 'white',
    textAlign: 'center',
  },
  iconTitle: {
    marginRight: '10px',
  },
  modalBody: {
    padding: '20px',
    borderRadius: '10px',
  },
  amountButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '15px',
  },
  amountButton: {
    width: '80px',
    borderRadius: '20px',
    transition: 'all 0.3s ease-in-out',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
    borderRadius: '10px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  checkboxGroup: {
    marginBottom: '10px',
  },
  donationStatus: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
    marginTop: '10px',
  },
  donateButton: {
    width: '100%',
    padding: '10px',
    fontSize: '18px',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',
  },
};

export default DonateForm;
