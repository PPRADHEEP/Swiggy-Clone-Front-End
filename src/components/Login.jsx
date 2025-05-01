import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!mobileNumber || !password) {
      setError("Both fields are required!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", { mobileNumber, password });
      
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert("Login Successful!");
        navigate("/home");
      } else {
        setError(response.data.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 shadow-lg">
        <h3 className="text-center mb-4 text-light">Welcome Back</h3>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light">Mobile Number</label>
            <input type="tel" className="form-control" placeholder="Enter your mobile number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="d-flex justify-content-between">
            <Link to="/forgot-password" className="text-warning">Forgot Password?</Link>
          </div>
          <button className="btn btn-warning w-100 mt-3" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-3 text-light">
          Don't have an account? <Link to="/signup" className="text-warning">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
