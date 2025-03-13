import React from "react";
import "./styles/whatwedo.css";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <div className="image-section">
        <img
          src="/assets/what-we-do.png"
          alt="Cloud Solutions"
          className="what-we-do-image"
        />
      </div>
      <div className="text-section">
        <h2>What we do</h2>
        <p>
          At CloudCave, we empower businesses with cutting-edge cloud,
          security, and IT solutions to drive innovation, security, and
          efficiency. Our expertise spans across cloud computing, cybersecurity,
          web development, and IT infrastructure, ensuring seamless operations
          for organizations of all sizes.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
