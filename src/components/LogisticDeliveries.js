import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Button, Form } from "react-bootstrap"; // Import Form for additional fields
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Import Map for location tracking
import L from "leaflet"; // For map customizations

const LogisticDeliveries = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [deliveryStatus, setDeliveryStatus] = useState("In Transit"); // State to manage delivery status

  const deliveries = [
    {
      orderId: 1001,
      donorAddress: "123 Elm Street, New York, NY",
      destination: "456 Maple Road, Boston, MA",
      items: "Clothes, Shoes",
      status: "In Transit",
      deliveryTime: "2024-12-10 14:00",
      deliveryCoordinates: { lat: 40.7128, lng: -74.0060 },
    },
    {
      orderId: 1002,
      donorAddress: "789 Oak Lane, San Francisco, CA",
      destination: "101 Pine Drive, Seattle, WA",
      items: "Books, Toys",
      status: "Pending",
      deliveryTime: "2024-12-12 10:30",
      deliveryCoordinates: { lat: 37.7749, lng: -122.4194 },
    },
    {
      orderId: 1003,
      donorAddress: "102 Birch Avenue, Austin, TX",
      destination: "203 Cedar Street, Houston, TX",
      items: "Electronics, Furniture",
      status: "Delivered",
      deliveryTime: "2024-12-05 15:00",
      deliveryCoordinates: { lat: 29.7604, lng: -95.3698 },
    },
  ];

  const handleMarkAsDelivered = (delivery) => {
    setSelectedDelivery(delivery);
    setShowModal(true); // Show the modal when a button is clicked
  };

  const handleConfirmDelivery = () => {
    alert(`Delivery for Order ID ${selectedDelivery.orderId} confirmed as Delivered!`);
    setDeliveryStatus("Delivered");
    setShowModal(false); // Close modal after confirming
  };

  const handleCancelDelivery = () => {
    setShowModal(false); // Close modal without doing anything
  };

  return (
    <motion.div
      className="container mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center mb-4">Assigned Deliveries</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Donor Address</th>
              <th>Destination</th>
              <th>Items</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr key={delivery.orderId}>
                <td>{delivery.orderId}</td>
                <td>{delivery.donorAddress}</td>
                <td>{delivery.destination}</td>
                <td>{delivery.items}</td>
                <td>
                  <span
                    className={`badge ${
                      delivery.status === "Delivered"
                        ? "bg-success"
                        : delivery.status === "In Transit"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {delivery.status}
                  </span>
                </td>
                <td>
                  {delivery.status !== "Delivered" ? (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleMarkAsDelivered(delivery)}
                    >
                      Mark as Delivered
                    </button>
                  ) : (
                    <span className="text-success">Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Marking Delivery */}
      <Modal show={showModal} onHide={handleCancelDelivery}>
        <Modal.Header closeButton>
          <Modal.Title>Mark as Delivered</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to mark this delivery as completed? Please confirm all items are delivered:</p>
          <p><strong>Order ID:</strong> {selectedDelivery?.orderId}</p>
          <p><strong>Items:</strong> {selectedDelivery?.items}</p>
          <p><strong>Destination:</strong> {selectedDelivery?.destination}</p>
          <p><strong>Donor Address:</strong> {selectedDelivery?.donorAddress}</p>
          <p><strong>Scheduled Delivery Time:</strong> {selectedDelivery?.deliveryTime}</p>

          {/* Delivery Progress and Map */}
          <div className="form-group">
            <label>Delivery Progress:</label>
            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: selectedDelivery?.status === "In Transit" ? "50%" : "100%",
                  backgroundColor: selectedDelivery?.status === "In Transit" ? "yellow" : "green",
                }}
              >
                {selectedDelivery?.status === "In Transit" ? "In Progress" : "Delivered"}
              </div>
            </div>
          </div>

          {/* Map showing delivery route */}
          <MapContainer center={[selectedDelivery?.deliveryCoordinates.lat, selectedDelivery?.deliveryCoordinates.lng]} zoom={13} style={{ height: "300px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[selectedDelivery?.deliveryCoordinates.lat, selectedDelivery?.deliveryCoordinates.lng]}>
              <Popup>Delivery Destination</Popup>
            </Marker>
          </MapContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelivery}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmDelivery}>
            Confirm Delivery
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
};

export default LogisticDeliveries;
