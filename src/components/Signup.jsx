import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
      <div className="signup-card p-4 shadow-lg">
        <h3 className="text-center mb-3 text-light">Create an Account</h3>
        <form>
          <div className="mb-3">
            <label className="form-label text-light">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Mobile Number</label>
            <input type="tel" className="form-control" placeholder="Enter your mobile number" required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input type="password" className="form-control" placeholder="Create a password" required />
          </div>
          <button className="btn btn-warning w-100 mt-3">Sign Up</button>
        </form>
        <p className="text-center mt-3 text-light">
          Already have an account? <Link to="/login" className="text-warning">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
