import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            {/* Inline CSS */}
            <style>
                {`
                    /* Basic Body and Background Styles */
                    body {
                        background-color: #f7f7f7;
                    }

                    /* Main content section padding */
                    .main-content {
                        padding: 40px 20px;
                    }

                    /* Vision, Mission, and Values Sections Styling */
                    .vision-section, .mission-section, .values-section {
                        padding: 20px;
                        border-radius: 10px;
                        background-color: #e9ecef;
                        margin-bottom: 20px;
                    }

                    /* Hover effect for team cards */
                    .team-section .card {
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        transition: 0.3s ease-in-out;
                    }

                    .team-section .card:hover {
                        transform: translateY(-5px);
                    }

                    /* Call to Action Section Styles */
                    .text-center {
                        margin-top: 30px;
                    }

                    .text-center h3 {
                        font-size: 2rem;
                    }

                    .text-center p {
                        font-size: 1.2rem;
                        color: #555;
                    }

                    /* Adding some responsiveness for small screens */
                    @media (max-width: 768px) {
                        .card-body {
                            padding: 10px;
                        }
                        .card-title {
                            font-size: 1.2rem;
                        }
                        .card-text {
                            font-size: 1rem;
                        }
                    }
                `}
            </style>

            {/* Navbar */}
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
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">Team</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <section className="container main-content">
                {/* Introduction Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4 font-weight-bold">About HelpHub</h1>
                    <p className="lead">Empowering communities, one donation at a time. Join us in making a difference in the lives of those in need.</p>
                </div>

                {/* Vision Section */}
                <div className="vision-section text-center">
                    <h2 className="font-weight-bold">Our Vision</h2>
                    <p>To build a connected and compassionate world where resources are shared to uplift individuals and families in times of need.</p>
                </div>

                {/* Mission Section */}
                <div className="mission-section text-center">
                    <h2 className="font-weight-bold">Our Mission</h2>
                    <p>HelpHub's mission is to connect donors, recipients, and logistics coordinators through a secure and easy-to-use platform to provide essential items during emergencies and natural disasters, fostering a supportive community.</p>
                </div>

                {/* Values Section */}
                <div className="text-center my-5">
                    <h2 className="font-weight-bold">Our Values</h2>
                    <p>We are driven by compassion, integrity, and a commitment to creating positive change. Our platform ensures transparency and accountability in every transaction.</p>
                </div>

                {/* Team Section */}
                <div id="team" className="team-section">
                    <h2 className="text-center font-weight-bold mb-4">Meet Our Team</h2>
                    <div className="row justify-content-center">
                        {/* Donor Card */}
                        <div className="col-md-3 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <i className="fas fa-hands-helping fa-3x mb-3"></i>
                                    <h5 className="card-title">Donors</h5>
                                    <p className="card-text">Generous individuals providing essential items to those in need, especially during emergencies.</p>
                                </div>
                            </div>
                        </div>

                        {/* Recipient Card */}
                        <div className="col-md-3 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <i className="fas fa-people-carry fa-3x mb-3"></i>
                                    <h5 className="card-title">Recipients</h5>
                                    <p className="card-text">Individuals and families who receive support during challenging times through essential donations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Logistics Coordinator Card */}
                        <div className="col-md-3 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <i className="fas fa-truck fa-3x mb-3"></i>
                                    <h5 className="card-title">Logistics Coordinators</h5>
                                    <p className="card-text">Organizes and manages the logistics of donation drives, ensuring timely delivery to recipients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center my-5">
                    <h3 className="font-weight-bold">Join Us in Making a Difference</h3>
                    <p>Whether you are here to donate, receive help, or coordinate efforts, your participation is essential. HelpHub connects individuals in meaningful ways to create a resilient and compassionate community.</p>
                    <a href="/login" className="btn btn-primary btn-lg mt-3">Get Involved</a>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
