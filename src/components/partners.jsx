import React from "react";
import "./styles/partners.css";

const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "/assets/micro.png" },
    { name: "AWS", logo: "/assets/AWS.png" },
    { name: "Cisco", logo: "/assets/cisco.png" },
    { name: "Fortinet", logo: "/assets/forti.png" },
  ];

  return (
    <div className="partners-container">
      <div className="partners-header">
        <h2>Our Partners</h2>
      </div>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
