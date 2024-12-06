import React, { useState } from 'react';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
 // Assuming custom CSS is imported here

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-us-page">
      {/* Navbar Placeholder */}
       <style>
        {
            `
            /* General Page Styles */
body {
  background-color: #f7f7f7;
  font-family: 'Arial', sans-serif;
}

/* Contact Info Cards */
.contact-info-section .contact-card {
  margin-bottom: 20px;
}

.contact-info-section .hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-info-section .hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Form Section */
.form-section {
  background-color: #e9ecef;
  padding: 30px;
  border-radius: 10px;
}

/* Button Styling */
button[type="submit"] {
  background-color: #28a745;
  border: none;
  font-size: 1.1rem;
  padding: 12px 25px;
}

button[type="submit"]:hover {
  background-color: #218838;
}

/* Footer Styling */
footer {
  background-color: #333;
  color: #fff;
}
            `
        }
       </style>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">HelpHub</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <Container className="main-content">
        {/* Contact Us Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 font-weight-bold text-primary">Contact Us</h1>
          <p className="lead">We’d love to hear from you! Please reach out with any questions, suggestions, or support needs.</p>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info-section text-center">
          <h2 className="font-weight-bold mb-4">Our Contact Information</h2>
          <p>Get in touch with us through the following ways:</p>
          <Row className="justify-content-center">
            <Col md={3} className="contact-card">
              <Card className="shadow-lg hover-card">
                <Card.Body className="text-center">
                  <FaPhoneAlt size={40} color="#007bff" />
                  <p className="mt-2">Phone: +91 8019594763</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="contact-card">
              <Card className="shadow-lg hover-card">
                <Card.Body className="text-center">
                  <FaEnvelope size={40} color="#007bff" />
                  <p className="mt-2">Email: support@helphub.com</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="contact-card">
              <Card className="shadow-lg hover-card">
                <Card.Body className="text-center">
                  <FaMapMarkerAlt size={40} color="#007bff" />
                  <p className="mt-2">Location: KL University, Vijayawada</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Contact Form Section */}
        <div className="form-section mb-5">
          <h2 className="text-center font-weight-bold mb-4">Send Us a Message</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="success" size="lg">Send Message</Button>
            </div>
          </Form>
        </div>
      </Container>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-dark text-light">
        <p>&copy; 2024 HelpHub | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ContactUs;
