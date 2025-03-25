import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 shadow-lg">
        <h3 className="text-center mb-4 text-light">Welcome Back</h3>
        <form>
          <div className="mb-3">
            <label className="form-label text-light">Mobile Number</label>
            <input type="tel" className="form-control" placeholder="Enter your mobile number" required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" required />
          </div>
          <div className="d-flex justify-content-between">
            <Link to="/forgot-password" className="text-warning">Forgot Password?</Link>
          </div>
          <button className="btn btn-warning w-100 mt-3">Login</button>
        </form>
        <p className="text-center mt-3 text-light">
          Don't have an account? <Link to="/signup" className="text-warning">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
