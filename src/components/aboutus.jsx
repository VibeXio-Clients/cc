import React from "react";
import "./styles/aboutus.css";

const AboutUs = () => {
  return (
    <section id="about-us-section" className="about-us-container">
      <h2 className="about-us-heading">ABOUT US</h2>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            At CloudCave, we harness the power of emerging technologies to drive
            digital transformation for businesses worldwide. Our expertise lies
            in building scalable, secure, and high-performance IT
            infrastructures that empower organizations to streamline operations,
            enhance security, and accelerate innovation.
          </p>
        </div>
        <div className="about-us-image">
          <img src="/assets/aboutus.webp" alt="Server Room" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
