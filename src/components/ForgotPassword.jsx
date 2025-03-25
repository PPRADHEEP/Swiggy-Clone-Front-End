import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/forgot-password", { email });
      alert("Reset link sent to your email!");
    } catch (error) {
      alert("Email not found!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Reset Password</h2>
      <form onSubmit={handleReset} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-danger w-100">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
