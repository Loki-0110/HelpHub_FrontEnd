import React from 'react';
import axios from 'axios';
import regimg from "../images/donorreg.jpg"; // Replace this with the path to your login image
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Admin_url } from './Service'; // Replace with the correct backend URL for admin login

const AdminLogin = () => {
    const navigate = useNavigate();

    // Initialize react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            // Send data to backend using axios
            const response = await axios.post(`${Admin_url}/login`, data);

            if (response.status === 200) {
                alert("Login Successful!");
                console.log(response.data);
                navigate('/admin/dashboard'); // Redirect to admin dashboard after login
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Invalid email or password, please try again.");
        }
    };

    return (
        <div className="container">
            <section className="vh-75">
                <div className="row d-flex justify-content-center align-items-center h-75">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-md-4">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            Admin Login
                                        </p>

                                        <form onSubmit={handleSubmit(onSubmit)} className="mx-1 mx-md-4">
                                            {/* Email Field */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                                                    />
                                                    <label className="form-label" htmlFor="email">Your Email</label>
                                                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
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
                                                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                                                    />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-secondary btn-md">
                                                    Login
                                                </button>
                                            </div>
                                        </form>

                                        {/* Registration Link */}
                                        <div className="text-center">
                                            <p>Don't have an account? <a href="/admin">Register</a></p>
                                        </div>
                                    </div>

                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src={regimg} className="img-fluid" alt="Admin Login" />
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

export default AdminLogin;
