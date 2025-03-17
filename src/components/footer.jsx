import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        {/* Address Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Address</h3>
          <p>CloudCave Technologies</p>
          <p>GoodWorks Infinity Park</p>
          <p>Tower-1, 92/A, 2nd Main Road,</p>
          <p>Electronic City, Phase-1,</p>
          <p>Bengaluru, Karnataka - 560100</p>
        </div>

        {/* Services Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <p><Link to="/cloud-labs">Cloud Labs</Link></p>
          <p><Link to="/mail-collaboration">Mail and Collaborations</Link></p>
          <p><Link to="/email-security">Email Security</Link></p>
          <p><Link to="/cybersecurity">Cyber Security</Link></p>
          <p><Link to="/web-app-development">Web and App Development</Link></p>
          <p><Link to="/backup-identity">Backup and Identity Management</Link></p>
          <p><Link to="/cloud-consulting">Cloud Consulting</Link></p>
          <p><Link to="/infrastructure-solutions">Infrastructure Solutions</Link></p>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <a href="mailto:sales@cloudcavetech.com">sales@cloudcavetech.com</a>
          <p>+91 99002 58874</p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/youtubeicon.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/twitter.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedinicon.png" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagramicon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright 2024 cloudcavetech.com &nbsp;&nbsp; | &nbsp;&nbsp; All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
