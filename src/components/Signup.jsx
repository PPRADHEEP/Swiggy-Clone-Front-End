import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [user, setUser] = useState({ fullName: "", mobileNumber: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!user.fullName || !user.mobileNumber || !user.email || !user.password) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        userName: user.fullName,
        email: user.email,
        password: user.password,
        contact: user.mobileNumber
      });

      console.log("Response:", response.data); // Debug

      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err); // Debug
      setError(err.response?.data?.message || "Signup failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
      <div className="signup-card p-4 shadow-lg">
        <h3 className="text-center mb-3 text-light">Create an Account</h3>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter your name"
              value={user.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              className="form-control"
              placeholder="Enter your mobile number"
              value={user.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-warning w-100 mt-3" disabled={loading}>
            {loading ? "Processing..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-3 text-light">
          Already have an account? <Link to="/login" className="text-warning">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;