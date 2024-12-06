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
      
      {/* Header Section */}
      <header className="header py-4">
        <div className="container text-center">
          <h1>Welcome to HelpHub</h1>
          <p>Your platform to donate essentials and improve lives, especially during emergencies.</p>
          <a href="/login" className="btn btn-primary">Donate Now</a> {/* Button */}
        </div>
      </header>

      {/* Hero Image Section */}
      <section className="Helping">
        <div className="text-center">
          <img src={HelpingHands} alt="Helping Hands" className="img-fluid" />
        </div>
      </section>
       

      {/* How It Works Section */}
      <section className="how-it-works my-5">
        <div className="container">
          <h2 className="text-center">How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={CauseImage} className="card-img-top" alt="Step 1" />
                <div className="card-body">
                  <h5 className="card-title">Choose Your Cause</h5>
                  <p className="card-text">Pick a cause that speaks to your heart.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={DonateImage} className="card-img-top" alt="Step 2" />
                <div className="card-body">
                  <h5 className="card-title">Make a Donation</h5>
                  <p className="card-text">Contribute what you can to support those in need.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={PeopleImage} className="card-img-top" alt="Step 3" />
                <div className="card-body">
                  <h5 className="card-title">Help Others</h5>
                  <p className="card-text">Your contributions make a difference in people's lives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="featured-campaigns my-5">
        <div className="container">
          <h2 className="text-center">Featured Campaigns</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={DisasterImage} className="card-img-top" alt="Disaster Relief Fund" />
                <div className="card-body">
                  <h5 className="card-title">Disaster Relief Fund</h5>
                  <p className="card-text">Assist communities affected by natural disasters through donations, shelter, and recovery efforts.</p>
                  <a href="/login" className="btn btn-primary">Contribute</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={SchoolImage} className="card-img-top" alt="Back-to-School Supplies Drive" />
                <div className="card-body">
                  <h5 className="card-title">Back-to-School Supplies Drive</h5>
                  <p className="card-text">Collect school supplies for underprivileged children to ensure they have the tools they need for education.</p>
                  <a href="/login" className="btn btn-primary">Contribute</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={FoodDriveImage} className="card-img-top" alt="Food Drive Campaign" />
                <div className="card-body">
                  <h5 className="card-title">Food Drive Campaign</h5>
                  <p className="card-text">Organize a food drive to collect non-perishable food items for local food banks.</p>
                  <a href="/login" className="btn btn-primary">Contribute</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer py-4 bg-dark text-white">
        <div className="container text-center">
          <p>Email: support@helphub.com | Phone: +91 8899526314</p>
          <p>
            <a href="https://facebook.com" target="/" className="fab fa-facebook text-white" style={{marginRight:'10px'}}></a>
            <a href="https://twitter.com" target="/" className="text-white" style={{ fontSize: '15px',marginRight:'10px' }}>X</a>
            <a href="https://instagram.com" target="/" className="fab fa-instagram text-white"></a>
          </p>
          <p>&copy; 2024 HelpHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
