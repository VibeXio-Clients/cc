import React from "react";
import "./cybersecurity.css";

const Cybersecurity = () => {
  return (
    <div className="cybersecurity">
      <h1>
        Cybersecurity <span>🛡️</span>
      </h1>
      <p>
        We provide robust cybersecurity solutions to safeguard businesses against evolving digital threats.
      </p>
      <ol>
        <li>
          <h2>Fortinet NGFW</h2>
          <p>
            Fortinet’s Next-Generation Firewall (NGFW) provides deep packet inspection, intrusion prevention, and secure VPN access to protect against cyber threats.
          </p>
        </li>
        <li>
          <h2>Checkpoint Security</h2>
          <p>
            Checkpoint offers network security, endpoint protection, and cloud security with AI-driven threat detection and zero-trust architecture.
          </p>
        </li>
        <li>
          <h2>Palo Alto Networks</h2>
          <p>
            Palo Alto’s firewalls ensure advanced cybersecurity protection with AI-driven threat intelligence, endpoint security, and cloud protection.
          </p>
        </li>
        <li>
          <h2>Web Application Firewall (WAF)</h2>
          <p>
            WAF defends web applications against cyber threats like SQL injection, cross-site scripting (XSS), and DDoS attacks.
          </p>
        </li>
        <li>
          <h2>Endpoint Security</h2>
          <p>
            Our endpoint security solutions protect devices from ransomware, malware, and unauthorized access, ensuring comprehensive cybersecurity coverage.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Cybersecurity;
