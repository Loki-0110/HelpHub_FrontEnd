import React, { useEffect } from 'react';
import * as THREE from 'three';
import HelpingHands from '../images/HelpingHands.png';
import CauseImage from '../images/cause.png';
import DonateImage from '../images/donate.jpg';
import PeopleImage from '../images/people.jpg';
import DisasterImage from '../images/disaster.png';
import SchoolImage from '../images/school.png';
import FoodDriveImage from '../images/fooddrive.jpg';
import d1 from '../images/d1.jpeg';
import d2 from '../images/d2.png';
import d3 from '../images/d3.jpeg';
import d4 from '../images/d4.jpeg';

const Home = () => {
  return (
    <div>
      <style>
        {`
          /* General Styles */
          body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .gradient-bg {
            background: linear-gradient(135deg, #4facfe, #00f2fe);
          }

          .gradient-bg-light {
            background: linear-gradient(to right, #f8f9fa, #e9ecef);
          }

          .btn-gradient {
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            border: none;
            color: #fff;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 30px;
            transition: 0.3s ease;
          }

          .btn-gradient:hover {
            background: linear-gradient(135deg, #00f2fe, #4facfe);
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }

          .hero-img {
            max-height: 500px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: scaleUp 1s ease;
          }

          .card {
            border: none;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .card-title {
            font-weight: bold;
            font-size: 1.25rem;
          }

          .footer {
            background: #343a40;
          }

          /* Animations */
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleUp {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          /* Section Title */
          .section-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
            position: relative;
            display: inline-block;
          }

          .section-title::after {
            content: '';
            width: 50px;
            height: 4px;
            background: #4facfe;
            display: block;
            margin: 10px auto 0;
          }

          .section-spacing {
            margin-top: 60px;
          }

          /* Social Icons */
          .social-icons a {
            font-size: 24px;
            margin: 0 10px;
            color: #fff;
            transition: color 0.3s ease;
          }

          .social-icons a:hover {
            color: #00f2fe;
          }
            /* Animation for the heading */
.animated-header {
  animation: fadeInUp 2s ease-out forwards;
}

/* Animation for the paragraph */
.animated-paragraph {
  animation: fadeInUp 2s ease-out forwards;
  animation-delay: 1s; /* Delay for the paragraph */
  color: #2c3e50; /* Dark text for better contrast */
  font-size: 1.5rem; /* Larger font size for readability */
  font-family: 'Roboto', sans-serif; /* A modern font family */
  font-weight: 500; /* Slightly bold text */
  line-height: 1.6; /* More spacing between lines for readability */
  text-align: center; /* Center-align the text */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Subtle text shadow for emphasis */
  max-width: 80%; /* Limiting width to improve readability on large screens */
  margin: 0 auto; /* Center the text */
}

/* Keyframes for the fadeInUp animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effect for the text */
.animated-paragraph:hover {
  color: #f39c12; /* Change color on hover */
  transform: translateY(-5px); /* Subtle hover effect */
  transition: all 0.3s ease-in-out;
}

/* Keyframes for the fadeInUp animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Highlight text color effect */
.text-highlight {
  color: #f39c12; /* Change this to your desired highlight color */
  transition: color 0.3s ease;
}

.text-highlight:hover {
  color: #e74c3c; /* Change this to the hover effect color */
}

        `}
      </style>

      {/* Header Section */}
      <header
        className="header py-5 gradient-bg d-flex align-items-center justify-content-center position-relative"
        style={{
          height: '100vh',
          background: 'url("../images/hero-bg.jpg") no-repeat center center/cover',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
          position: 'relative',
        }}
      >
        <div className="container text-center text-md-left position-relative" style={{ zIndex: 3 }}>
          <div className="row align-items-center">
            <div
              className="col-md-6 animate__animated animate__fadeInUp"
              style={{ animationDelay: '0.3s', animationDuration: '1.2s' }}
            >
              <h1 className="display-4 font-weight-bold text-blue animated-header">
                Empowering Lives with <span className="text-highlight">Your Help</span>
              </h1>
              <p className="lead animated-paragraph">
                HelpHub connects you with life-changing causes through donations, volunteering, and more.
              </p>


              <a
                href="/login"
                className="btn btn-lg btn-gradient mt-3 px-5 py-2 shadow-lg"
                style={{ animation: 'fadeInUp 1s ease' }}
              >
                Get Started
              </a>
            </div>
            <div
              className="col-md-6 text-center"
              style={{ animation: 'scaleUp 1s ease', animationDelay: '0.5s' }}
            >
              <img src={HelpingHands} alt="Helping Hands" className="img-fluid hero-img animated" />
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works py-5 bg-light section-spacing">
        <div className="container">
          <h2 className="text-center font-weight-bold mb-4 section-title">How It Works</h2>
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
              <div
                className="col-md-4 mb-4"
                key={index}
                style={{ animation: `fadeInUp ${0.5 + index * 0.2}s ease` }}
              >
                <div className="card shadow-lg border-0">
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
          <h2 className="text-center font-weight-bold text-dark mb-4 section-title">
            Featured Campaigns
          </h2>
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
              <div
                className="col-md-4 mb-4"
                key={index}
                style={{ animation: `fadeInUp ${0.6 + index * 0.2}s ease` }}
              >
                <div className="card shadow-lg border-0 campaign-card">
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
      <footer className="footer py-5 text-white">
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
