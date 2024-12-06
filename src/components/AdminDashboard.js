import React, { useState, useEffect } from "react";
import { FaUsers, FaBullhorn, FaPlus, FaEdit, FaTrash, FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { Admin_url } from './Service';
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
    
    // State Hooks for managing donors, campaigns, and modal visibility
    const [donors, setDonors] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [newDonor, setNewDonor] = useState({ username: "", email: "" , password:""});
    const [editDonor, setEditDonor] = useState(null);
    const [newCampaign, setNewCampaign] = useState({ name: "", description: "" ,startDate: "", endDate: "" });
    const [editCampaign, setEditCampaign] = useState(null);

    // Modal State
    const [showAddDonorModal, setShowAddDonorModal] = useState(false);
    const [showEditDonorModal, setShowEditDonorModal] = useState(false);
    const [showAddCampaignModal, setShowAddCampaignModal] = useState(false);
    const [showEditCampaignModal, setShowEditCampaignModal] = useState(false);

    // State for active section
    const [activeSection, setActiveSection] = useState("donors");

    // Fetch donors and campaigns on component mount
    useEffect(() => {
        fetchDonors();
        fetchCampaigns();
    }, []);

    // Fetch Donors
    const fetchDonors = async () => {
        try {
            const response = await axios.get(`${Admin_url}/donors`);
            setDonors(response.data);
        } catch (error) {
            console.error("Error fetching donors:", error);
        }
    };

    // Fetch Campaigns
    const fetchCampaigns = async () => {
        try {
            const response = await axios.get(`${Admin_url}/campaigns`);
            setCampaigns(response.data);
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        }
    };

    // Add Donor
    const handleAddDonor = async () => {
        try {
            const response = await axios.post(`${Admin_url}/donor`, newDonor);
            setDonors([...donors, response.data]);
            setShowAddDonorModal(false);
            alert("Donor added successfully!");
        } catch (error) {
            console.error("Error adding donor:", error);
        }
    };

    // Edit Donor
    const handleEditDonor = async () => {
        try {
            const response = await axios.put(`${Admin_url}/donor/${editDonor.id}`, editDonor);
            setDonors(donors.map(d => (d.id === editDonor.id ? response.data : d)));
            setShowEditDonorModal(false);
            alert("Donor updated successfully!");
        } catch (error) {
            console.error("Error editing donor:", error);
        }
    };

    // Delete Donor
    const handleDeleteDonor = async (id) => {
        try {
            await axios.delete(`${Admin_url}/donor/${id}`);
            setDonors(donors.filter(d => d.id !== id));
            alert("Donor deleted successfully!");
        } catch (error) {
            console.error("Error deleting donor:", error);
        }
    };

    // Add Campaign
    const handleAddCampaign = async () => {
        try {
            const response = await axios.post(`${Admin_url}/campaign`, newCampaign);
            setCampaigns([...campaigns, response.data]);
            setShowAddCampaignModal(false);
            alert("Campaign added successfully!");
        } catch (error) {
            console.error("Error adding campaign:", error);
        }
    };

    // Edit Campaign
    const handleEditCampaign = async () => {
        try {
            const response = await axios.put(`/api/campaigns/${editCampaign.id}`, editCampaign);
            setCampaigns(campaigns.map(c => (c.id === editCampaign.id ? response.data : c)));
            setShowEditCampaignModal(false);
            alert("Campaign updated successfully!");
        } catch (error) {
            console.error("Error editing campaign:", error);
        }
    };

    // Delete Campaign
    const handleDeleteCampaign = async (id) => {
        try {
            await axios.delete(`${Admin_url}/campaign/${id}`);
            setCampaigns(campaigns.filter(c => c.id !== id));
            alert("Campaign deleted successfully!");
        } catch (error) {
            console.error("Error deleting campaign:", error);
        }
    };

    // Handle logout
    const handleLogout = () => {
        // Add your logout logic here
        navigate("/");
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
                <h3 className="text-center">Admin Dashboard</h3>
                <hr />
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button
                            onClick={() => setActiveSection("donors")}
                            className={`nav-link text-white ${activeSection === "donors" ? "active" : ""}`}
                        >
                            <FaUsers className="me-2" /> Manage Donors
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={() => setActiveSection("campaigns")}
                            className={`nav-link text-white ${activeSection === "campaigns" ? "active" : ""}`}
                        >
                            <FaBullhorn className="me-2" /> Campaigns
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleLogout} className="nav-link text-white btn btn-link">
                            <FaSignOutAlt className="me-2" /> Logout
                        </button>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="container-fluid p-4">
                {activeSection === "donors" && (
                    <section id="donors">
                        <h4 className="mb-4">Donor Management</h4>
                        <button
                            className="btn btn-primary mb-3"
                            onClick={() => setShowAddDonorModal(true)}
                        >
                            <FaPlus className="me-2" /> Add Donor
                        </button>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donors.map(donor => (
                                    <tr key={donor.id}>
                                        <td>{donor.username}</td>
                                        <td>{donor.email}</td>
                                        <td>{donor.password}</td>
                                
                                        <td>
                                            <button
                                                className="btn btn-sm btn-warning me-2"
                                                onClick={() => {
                                                    setEditDonor(donor);
                                                    setShowEditDonorModal(true);
                                                }}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDeleteDonor(donor.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}

                {activeSection === "campaigns" && (
                    <section id="campaigns" className="mt-5">
                        <h4 className="mb-4">Campaigns</h4>
                        <button
                            className="btn btn-primary mb-3"
                            onClick={() => setShowAddCampaignModal(true)}
                        >
                            <FaPlus className="me-2" /> Add Campaign
                        </button>
                        <div className="row">
                            {campaigns.map((campaign, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-header bg-primary text-white">
                                            Campaign #{campaign.id}
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-name">{campaign.name}</h5>
                                            <p className="card-text">{campaign.description}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Start Date: {campaign.startDate || "N/A"}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    End Date: {campaign.endDate || "N/A"}
                                                </small>
                                            </p>
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    setEditCampaign(campaign);
                                                    setShowEditCampaignModal(true);
                                                }}
                                            >
                                                <FaEdit /> Edit
                                            </button>
                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={() => handleDeleteCampaign(campaign.id)}
                                            >
                                                <FaTrash /> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                  </section>
                )}
            </div>

            {/* Add Donor Modal */}
            {showAddDonorModal && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-name">Add New Donor</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowAddDonorModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Name"
                                    value={newDonor.username}
                                    onChange={(e) => setNewDonor({ ...newDonor, username: e.target.value })}
                                />
                                <input
                                    type="email"
                                    className="form-control mb-2"
                                    placeholder="Email"
                                    value={newDonor.email}
                                    onChange={(e) => setNewDonor({ ...newDonor, email: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Password"
                                    value={newDonor.password}
                                    onChange={(e) => setNewDonor({ ...newDonor, password: e.target.value })}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowAddDonorModal(false)}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleAddDonor}>
                                    Save Donor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Donor Modal */}
            {showEditDonorModal && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-name">Edit Donor</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowEditDonorModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Name"
                                    value={editDonor?.username || ""}
                                    onChange={(e) => setEditDonor({ ...editDonor, username: e.target.value })}
                                />
                                <input
                                    type="email"
                                    className="form-control mb-2"
                                    placeholder="Email"
                                    value={editDonor?.email || ""}
                                    onChange={(e) => setEditDonor({ ...editDonor, email: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="password"
                                    value={editDonor?.password || ""}
                                    onChange={(e) => setEditDonor({ ...editDonor, password: e.target.value })}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowEditDonorModal(false)}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleEditDonor}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Add Campaign Modal */}
            {showAddCampaignModal && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-name">Add Campaign</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowAddCampaignModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Title"
                                    value={newCampaign.name}
                                    onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Description"
                                    value={newCampaign.description}
                                    onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })}
                                />
                                <input
                                    type="date"
                                    className="form-control mb-2"
                                    placeholder="Start Date"
                                    value={newCampaign.startDate}
                                    onChange={(e) => setNewCampaign({ ...newCampaign, startDate: e.target.value })}
                                />
                                <input
                                    type="date"
                                    className="form-control mb-2"
                                    placeholder="End Date"
                                    value={newCampaign.endDate}
                                    onChange={(e) => setNewCampaign({ ...newCampaign, endDate: e.target.value })}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowAddCampaignModal(false)}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleAddCampaign}>
                                    Save Campaign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Campaign Modal */}
            {showEditCampaignModal && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-name">Edit Campaign</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowEditCampaignModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Title"
                                    value={editCampaign?.name || ""}
                                    onChange={(e) => setEditCampaign({ ...editCampaign, name: e.target.value })}
                                />
                                <textarea
                                    className="form-control mb-2"
                                    placeholder="Description"
                                    value={editCampaign?.description || ""}
                                    onChange={(e) => setEditCampaign({ ...editCampaign, description: e.target.value })}
                                />
                                <input
                                    type="date"
                                    className="form-control mb-2"
                                    placeholder="Start Date"
                                    value={editCampaign?.startDate || ""}
                                    onChange={(e) => setEditCampaign({ ...editCampaign, startDate: e.target.value })}
                                />
                                <input
                                    type="date"
                                    className="form-control mb-2"
                                    placeholder="End Date"
                                    value={editCampaign?.endDate || ""}
                                    onChange={(e) => setEditCampaign({ ...editCampaign, endDate: e.target.value })}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowEditCampaignModal(false)}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleEditCampaign}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
