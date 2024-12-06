import React from "react";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Modern Map Component
import "leaflet/dist/leaflet.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const LogisticDashboard = () => {
    const styles = {
        card: {
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "15px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          marginBottom: "15px",
        },
        graphCard: {
          height: "200px",
        },
        mapContainer: {
          height: "180px",
          borderRadius: "8px",
          overflow: "hidden",
        },
      };
    
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Welcome to the Logistics Dashboard</h2>
          <div className="row">
            <div className="col-md-3">
              <div style={styles.card}>
                <h5>Total Deliveries</h5>
                <h3>150</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div style={styles.card}>
                <h5>Successful Deliveries</h5>
                <h3>140</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div style={styles.card}>
                <h5>Delayed Deliveries</h5>
                <h3>10</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div style={styles.card}>
                <h5>Fuel Efficiency</h5>
                <h3>15 km/L</h3>
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-6">
              <div style={{ ...styles.card, ...styles.graphCard }}>
                <h4>Delivery Goals</h4>
                <Bar
                  options={{
                    plugins: { legend: { display: false } },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                  data={{
                    labels: ["W1", "W2", "W3", "W4"],
                    datasets: [
                      {
                        label: "Deliveries",
                        data: [30, 40, 35, 50],
                        backgroundColor: ["#2575fc", "#4caf50", "#ff9800", "#f44336"],
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ ...styles.card, ...styles.graphCard }}>
                <h4>Trends Over Time</h4>
                <Line
                  options={{
                    plugins: { legend: { display: false } },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [
                      {
                        label: "Count",
                        data: [100, 120, 150, 130, 180],
                        borderColor: "#6a11cb",
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: "rgba(106, 17, 203, 0.2)",
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
    
          <div style={styles.card}>
            <h4>Live Map</h4>
            <div style={styles.mapContainer}>
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>Delivery Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </motion.div>
      );
    };  

export default LogisticDashboard;