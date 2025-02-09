import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for v6
import axios from 'axios'; // Import Axios
import Logimg from '../images/donorreg.jpg';
import { Donor_url } from './Service';

const DonorLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Now using error state
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post(`${Donor_url}/login`, loginData, { withCredentials: true });

      if (response.status === 200) {
        console.log('Login Successful');
        navigate('/dashboard'); // Redirect after login
      } else {
        setError('Invalid credentials, please try again');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setError('An error occurred. Please try again later.');
    }
    onLogin();
  };

  return (
    <div style={{ backgroundColor: '#eee' }}>
      <section className="vh-75">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-150">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '15px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Become a Helper</p>

                      {/* Display error message */}
                      {error && <p className="text-danger text-center">{error}</p>}

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="email">Your Email</label>
                          </div>
                        </div>

                        {/* Password Field */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="password">Password</label>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-secondary btn-md">
                            Log In
                          </button>
                        </div>
                      </form>

                      {/* Register Link and Forgot Password */}
                      <div className="text-center">
                        <p>Don't have an account? <a href="/signup">Sign up</a></p>
                        <p><a href="/forgot-password">Forgot Password?</a></p>
                      </div>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={Logimg} className="img-fluid" alt="Donor registration" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonorLogin;
