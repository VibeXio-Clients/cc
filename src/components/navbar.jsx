import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./styles/navbar.css";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-section">
      <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
          <img src="/assets/logo.png" alt="CloudCave Logo" className="logo" />
        </Link>
      <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="center-links">
          <a href="/">Home</a>
          <ScrollLink to="about-us-section" smooth={true} duration={500} offset={-70} onClick={() => {
              if (window.location.pathname !== "/") {
              window.location.href = "/#about-us-section";
              }
              }}>
             About us
          </ScrollLink>
          <ScrollLink to="products-section" smooth={true} duration={500} offset={-70} onClick={() => {
              if (window.location.pathname !== "/") {
              window.location.href = "/#products-section";
              }
            }}>
            Products
          </ScrollLink>
          <div
            className="services-link"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <a href="#">Services</a>
            {isServicesDropdownOpen && (
              <div className="dropdown-menu">
                <a href="/cloud-labs">Cloud Labs</a>
                <a href="/mail-collaboration">Mail and Collaborations</a>
                <a href="/email-security">Email Security</a>
                <a href="/cybersecurity">Cyber Security</a>
                <a href="/web-app-development">Web and App Development</a>
                <a href="/backup-identity">Backup and Identity Management</a>
                <a href="/infrastructure-solutions">Infrastructure Solutions</a>
                <a href="/cloud-consulting">Cloud Consulting</a>
              </div>
            )}
          </div>
        </div>
        <a href="#" className="right-link">
          Book for Demo
        </a>
      </div>
    </div>
  );
};

export default Navbar;
