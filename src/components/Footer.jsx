import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css"; // Create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer bg-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Swiggy Logo and Copyright */}
          <div className="col-md-3">
            <h3 className="footer-logo text-danger">Swiggy</h3>
            <p>© 2025 Swiggy Limited</p>
          </div>

          {/* Company Links */}
          <div className="col-md-2">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="about">About Us</a></li>
              <li><a href="corporate">Swiggy Corporate</a></li>
              <li><a href="careers">Careers</a></li>
              <li><a href="team">Team</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-2">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="Help">Help & Support</a></li>
              <li><a href="partner">Partner With Us</a></li>
              <li><a href="ride">Ride With Us</a></li>
            </ul>
          </div>


          {/* Legal Section */}
          <div className="col-md-2">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="terms">Terms & Conditions</a></li>
              <li><a href="privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links & App Download */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h5>Social Links</h5>
            <a href="https://www.linkedin.com/company/swiggy-in" className="me-3">LinkedIn</a>
            <a href="https://www.instagram.com/swiggyindia/" className="me-3">Instagram</a>
            <a href="https://www.facebook.com/swiggy.in/" className="me-3">Facebook</a>
            <a href="https://x.com/Swiggy">Twitter</a>
          </div>

          <div className="col-md-6 text-end">
            <h5>For better experience, download the Swiggy app now</h5>
            <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="app-download"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="app-download"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
