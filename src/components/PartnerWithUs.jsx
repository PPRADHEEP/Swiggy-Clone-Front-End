import React from "react";
import "../styles/PartnerWithUs.css";
const PartnerWithUs = () => {
  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h2>Reach customers far away from you</h2>
          <p>Partner with Swiggy and grow your business online.</p>
          <div className="form-box">
            <h3>Get Started</h3>
            <p>Enter a mobile number or restaurant ID to continue</p>
            <input type="text" placeholder="Enter Restaurant ID / Mobile number" />
            <button className="disabled">Continue</button>
            <p className="terms">
              By logging in, I agree to Swiggy’s <a href="terms">terms & conditions</a>
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="steps-section">
        <h3>In just 3 easy steps</h3>
        <h2>Get your restaurant delivery-ready in 24hrs!</h2>
        <div className="steps">
          <div className="step">
            <span>STEP 1</span>
            <h4>Install the Swiggy Owner App</h4>
          </div>
          <div className="step">
            <span>STEP 2</span>
            <h4>Login/Register using your phone number</h4>
          </div>
          <div className="step">
            <span>STEP 3</span>
            <h4>Enter restaurant details</h4>
          </div>
        </div>
      </div>

      {/* Document Checklist */}
      <div className="document-section">
        <h3>For an easy form filling process,</h3>
        <p>You can keep these documents handy.</p>
        <ul>
          <li><a href="Licence">FSSAI License copy</a></li>
          <li>Your Restaurant menu</li>
          <li>Bank details</li>
          <li><a href="GST">GSTIN</a></li>
          <li>PAN card copy</li>
        </ul>
      </div>
    </div>
  );
};

export default PartnerWithUs;
