import React from "react";
import "./cybersecurity.css";

// Import images
import fortinetImg from "./images/fortinetNGFW.png";
import checkpointImg from "./images/checkpoint.png";
import paloAltoImg from "./images/paloalto.png";
import wafImg from "./images/webappfirewall.png";
import endpointImg from "./images/endpoint-security.png";

const Cybersecurity = () => {
  const cybersecurityData = [
    {
      title: "Fortinet NGFW",
      description:
        "Fortinet’s Next-Generation Firewall (NGFW) provides deep packet inspection, intrusion prevention, and secure VPN access to protect against cyber threats.",
      image: fortinetImg,
    },
    {
      title: "Checkpoint Security",
      description:
        "Checkpoint offers network security, endpoint protection, and cloud security with AI-driven threat detection and zero-trust architecture.",
      image: checkpointImg,
    },
    {
      title: "Palo Alto Networks",
      description:
        "Palo Alto’s firewalls ensure advanced cybersecurity protection with AI-driven threat intelligence, endpoint security, and cloud protection.",
      image: paloAltoImg,
    },
    {
      title: "Web Application Firewall (WAF)",
      description:
        "WAF defends web applications against cyber threats like SQL injection, cross-site scripting (XSS), and DDoS attacks.",
      image: wafImg,
    },
    {
      title: "Endpoint Security",
      description:
        "Our endpoint security solutions protect devices from ransomware, malware, and unauthorized access, ensuring comprehensive cybersecurity coverage.",
      image: endpointImg,
    },
  ];

  return (
    <div className="cybersecurity">
      <h1>Cybersecurity</h1>
      <p>
        We provide robust cybersecurity solutions to safeguard businesses against evolving digital threats.
      </p>
      <div className="cybersecurity-list">
        {cybersecurityData.map((item, index) => (
          <div className={`cybersecurity-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="cybersecurity-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="cybersecurity-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cybersecurity;
