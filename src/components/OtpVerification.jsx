import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get mobile number from URL params
  const queryParams = new URLSearchParams(location.search);
  const mobileNumber = queryParams.get("mobile");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!otp) {
      setError("Please enter the OTP.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/auth/verify-otp?mobile=${mobileNumber}&otp=${otp}`
      );

      if (response.data === "OTP Verified Successfully!") {
        alert("OTP Verified! You can now login.");
        navigate("/login");
      } else {
        setError("Invalid OTP! Please try again.");
      }
    } catch (err) {
      setError("OTP verification failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container d-flex justify-content-center align-items-center vh-100">
      <div className="otp-card p-4 shadow-lg">
        <h3 className="text-center mb-3 text-light">OTP Verification</h3>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light">Enter OTP</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-warning w-100 mt-3" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
        <p className="text-center mt-3 text-light">
          Didn't receive OTP? <button className="btn btn-link text-warning">Resend OTP</button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
