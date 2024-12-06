import React from 'react';
import HelpingHands from '../images/HelpingHands.png';
import CauseImage from '../images/cause.png';
import DonateImage from '../images/donate.jpg';
import PeopleImage from '../images/people.jpg';
import DisasterImage from '../images/disaster.png';
import SchoolImage from '../images/school.png';
import FoodDriveImage from '../images/fooddrive.jpg';

const Home = () => {
  return (
    <div>
      <style>
        {`
          .gradient-bg-light {
            background: linear-gradient(to right, #f8f9fa, #e9ecef);
          }
          .btn-gradient {
            background: linear-gradient(to right, #4facfe, #00f2fe);
            border: none;
            color: #fff;
            transition: 0.3s ease;
          }
          .btn-gradient:hover {
            background: linear-gradient(to right, #00f2fe, #4facfe);
            transform: translateY(-2px);
          }
          .hero-img {
            max-height: 500px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .social-icons a {
            font-size: 20px;
            margin: 0 10px;
            color: #fff;
            transition: 0.3s ease;
          }
          .social-icons a:hover {
            color: #00f2fe;
          }
          .card {
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
          }
          .card-title {
            font-weight: bold;
          }
          .footer {
            background: #343a40;
          }
          /* Added spacing between sections */
          .section-spacing {
            margin-top: 40px;
          }
        `}
      </style>

      {/* Header Section */}
      <header className="header py-5 gradient-bg d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 text-center text-md-left">
              <h1 className="display-4 font-weight-bold">Welcome to HelpHub</h1>
              <p className="lead">Your platform to donate essentials and improve lives, especially during emergencies.</p>
              <a href="/login" className="btn btn-lg btn-gradient mt-3">Donate Now</a>
            </div>
            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img src={HelpingHands} alt="Helping Hands" className="img-fluid hero-img" />
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works py-5 section-spacing">
        <div className="container">
          <h2 className="text-center font-weight-bold mb-4">How It Works</h2>
          <div className="row">
            {[{
              img: CauseImage,
              title: 'Choose Your Cause',
              text: 'Pick a cause that speaks to your heart.',
            }, {
              img: DonateImage,
              title: 'Make a Donation',
              text: 'Contribute what you can to support those in need.',
            }, {
              img: PeopleImage,
              title: 'Help Others',
              text: 'Your contributions make a difference in people\'s lives.',
            }].map((step, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img src={step.img} className="card-img-top" alt={step.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{step.title}</h5>
                    <p className="card-text">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="featured-campaigns py-5 gradient-bg-light section-spacing">
        <div className="container">
          <h2 className="text-center font-weight-bold text-dark mb-4">Featured Campaigns</h2>
          <div className="row">
            {[{
              img: DisasterImage,
              title: 'Disaster Relief Fund',
              text: 'Assist communities affected by natural disasters.',
            }, {
              img: SchoolImage,
              title: 'Back-to-School Supplies Drive',
              text: 'Collect school supplies for underprivileged children.',
            }, {
              img: FoodDriveImage,
              title: 'Food Drive Campaign',
              text: 'Organize a food drive to collect non-perishable food items.',
            }].map((campaign, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img src={campaign.img} className="card-img-top" alt={campaign.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{campaign.title}</h5>
                    <p className="card-text">{campaign.text}</p>
                    <a href="/login" className="btn btn-gradient mt-2">Contribute</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer py-4 text-white">
        <div className="container text-center">
          <p>Email: support@helphub.com | Phone: +91 8899526314</p>
          <div className="social-icons">
            <a href="https://facebook.com" className="fab fa-facebook"></a>
            <a href="https://twitter.com" className="fab fa-twitter"></a>
            <a href="https://instagram.com" className="fab fa-instagram"></a>
          </div>
          <p className="mt-2">&copy; 2024 HelpHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
