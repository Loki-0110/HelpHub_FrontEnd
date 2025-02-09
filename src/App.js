import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'; 
import DonorNavbar from './components/DonorNavbar';  // Import DonorNavbar
import DonorRegistration from './components/DonorRegistration';
import DonorLogin from './components/DonorLogin';
import DonorDashBoard from './components/DonorDashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DonorProfile from './components/DonorProfile';
import '@fortawesome/free-solid-svg-icons';
import AdminRegistration from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Campaigns from './components/Campaign';
import Logistics from './components/Logistics';
import DonationForm from './components/DonateForm';
import ContactSupport from './components/ContactSupport';
function App() {
  const [isDonorLoggedIn, setIsDonorLoggedIn] = useState(
    localStorage.getItem('isDonorLoggedIn') === 'true'
  );

  // Function to handle login (called by DonorLogin)
  const handleLogin = () => {
    setIsDonorLoggedIn(true); // Set login state to true
    localStorage.setItem('isDonorLoggedIn', 'true'); // Store in localStorage
  };

  // Function to handle logout (called by DonorNavbar)
  const handleLogout = () => {
    setIsDonorLoggedIn(false); // Set login state to false
    localStorage.setItem('isDonorLoggedIn', 'false'); // Remove from localStorage
  };

  return (
    <Router>
      {/* Pass handleLogin, handleLogout, and isDonorLoggedIn as props to NavbarWithLocation */}
      <NavbarWithLocation 
        isDonorLoggedIn={isDonorLoggedIn} 
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Routes>  
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/logistics/*" element={<Logistics />} />
        <Route path="/admin" element={<AdminRegistration />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<DonorRegistration />} /> 
        <Route path="/login" element={<DonorLogin onLogin={handleLogin} />} /> 
        <Route path="/dashboard" element={<DonorDashBoard />} />
        <Route path="donor/dash" element={<DonorDashBoard />} />
        <Route path="profile" element={<DonorProfile />} /> 
        <Route path="/donor/campaigns" element={<Campaigns/>}/>
        <Route path="/donor/donate" element={<DonationForm/>}/>
        <Route path="/donor/support" element={<ContactSupport/>}/>
        {/* <Route path="/logistics/deliveries" element={<LogisticDeliveries />} />
        <Route path="/logistics/dashboard" element={< LogisticDashboard/>}/> */}
      </Routes>
    </Router>
  );
}

// This component now receives the necessary functions as props
function NavbarWithLocation({ isDonorLoggedIn, handleLogin, handleLogout }) {
  const location = useLocation();  // useLocation inside the Router context

  // Conditionally render Navbar based on login state and current route
  return (
    <>
      {/* Check if the current path is logistics */}
      {isDonorLoggedIn && location.pathname !== '/admin/dashboard' && !location.pathname.startsWith('/logistics') ? (
        <DonorNavbar logout={handleLogout} /> // Render DonorNavbar if logged in and not on AdminDashboard or Logistics
      ) : !location.pathname.startsWith('/logistics') && location.pathname !== '/admin/dashboard' ? (
        <Navbar /> // Render regular Navbar if not logged in and not on AdminDashboard or Logistics
      ) : null}
    </>
  );
}

export default App;
