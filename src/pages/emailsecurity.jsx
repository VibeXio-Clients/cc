import React from "react";
import "./emailsecurity.css";

// Import images
import threatProtectionImg from "./images/atp.png";
import dmarcMonitorImg from "./images/DMARC.png";
import phishingSimImg from "./images/phishing.png";
import bmiProtectionImg from "./images/bmi.png";

const EmailSecurity = () => {
  const emailSecurityData = [
    {
      title: "Advanced Threat Protection",
      description:
        "Our Advanced Threat Protection (ATP) safeguards emails from malware, phishing, and ransomware using AI-driven security measures. It provides real-time threat detection and prevents data breaches.",
      image: threatProtectionImg,
    },
    {
      title: "DMARC Monitor",
      description:
        "DMARC is an email authentication protocol that prevents email spoofing, phishing, and impersonation attacks. Our DMARC monitoring ensures only legitimate emails reach your employees and customers.",
      image: dmarcMonitorImg,
    },
    {
      title: "Phishing Simulations",
      description:
        "We offer customized phishing attack simulations to help employees identify phishing attempts and improve cybersecurity awareness. These tests reduce the risk of human error in cyberattacks.",
      image: phishingSimImg,
    },
    {
      title: "BMI (Business Email Compromise Protection)",
      description:
        "BMI protection helps businesses prevent email fraud, account takeovers, and invoice scams by using AI-driven anomaly detection and two-factor authentication.",
      image: bmiProtectionImg,
    },
  ];

  return (
    <div className="email-security">
      <h1>Email Security</h1>
      <p>
        Protect your business from cyber threats, phishing, and email-based attacks with our advanced security solutions.
      </p>
      <div className="security-list">
        {emailSecurityData.map((item, index) => (
          <div className={`security-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="security-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="security-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailSecurity;
