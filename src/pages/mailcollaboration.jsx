import React from "react";
import "./mailcollaboration.css";

const MailCollaboration = () => {
  return (
    <div className="mail-collaboration">
      <h1>
        Mail & Collaboration 
      </h1>
      <p>
        Enable seamless business communication and collaboration with our secure and efficient email solutions.
      </p>
      <ol>
        <li>
          <h2>Email Solutions</h2>
          <p>
            Our email solutions offer secure, reliable, and scalable email hosting services with spam protection, encryption, and backup options. Businesses can opt for cloud-based or on-premise email servers, ensuring data security and compliance.
          </p>
        </li>
        <li>
          <h2>Office 365</h2>
          <p>
            Office 365 is a cloud-based productivity suite from Microsoft, including Outlook, Word, Excel, Teams, and SharePoint. It enables real-time collaboration and secure cloud storage through OneDrive and SharePoint.
          </p>
        </li>
        <li>
          <h2>G Suite (Google Workspace)</h2>
          <p>
            Google Workspace provides professional email services with Gmail, along with integrated tools like Google Drive, Meet, and Docs. It ensures efficient team collaboration and offers enterprise-grade security.
          </p>
        </li>
        <li>
          <h2>Cloud Zimbra</h2>
          <p>
            Cloud Zimbra is an open-source email and collaboration platform that offers email, contacts, calendar, file sharing, and task management. It is a cost-effective alternative to Microsoft Exchange and G Suite.
          </p>
        </li>
        <li>
          <h2>Hybrid Email Solutions</h2>
          <p>
            Hybrid Email Solutions combine cloud-based and on-premise email hosting to offer flexibility, cost-efficiency, and enhanced security. It is ideal for businesses requiring custom email management.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default MailCollaboration;