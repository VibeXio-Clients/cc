import React from "react";
import "./emailsecurity.css";

const EmailSecurity = () => {
  return (
    <div className="email-security">
      <h1>
        Email Security
      </h1>
      <p>
        Protect your business from cyber threats, phishing, and email-based attacks with our advanced security solutions.
      </p>
      <ol>
        <li>
          <h2>Advanced Threat Protection</h2>
          <p>
            Our Advanced Threat Protection (ATP) safeguards emails from malware, phishing, and ransomware using AI-driven
            security measures. It provides real-time threat detection and prevents data breaches.
          </p>
        </li>
        <li>
          <h2>DMARC Monitor</h2>
          <p>
            DMARC is an email authentication protocol that prevents email spoofing, phishing, and impersonation attacks. Our
            DMARC monitoring ensures only legitimate emails reach your employees and customers.
          </p>
        </li>
        <li>
          <h2>Phishing Simulations</h2>
          <p>
            We offer customized phishing attack simulations to help employees identify phishing attempts and improve cybersecurity
            awareness. These tests reduce the risk of human error in cyberattacks.
          </p>
        </li>
        <li>
          <h2>BMI (Business Email Compromise Protection)</h2>
          <p>
            BMI protection helps businesses prevent email fraud, account takeovers, and invoice scams by using AI-driven anomaly
            detection and two-factor authentication.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default EmailSecurity;