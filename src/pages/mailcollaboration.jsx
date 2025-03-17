import React from "react";
import "./mailcollaboration.css";

// Import images
import emailSolutionsImg from "./images/emailsolution.png";
import office365Img from "./images/office365.png";
import googleWorkspaceImg from "./images/gsuite.png";
import cloudZimbraImg from "./images/cloudzimbra.png";
import hybridEmailImg from "./images/hybridemailsolution.png";

const MailCollaboration = () => {
  const mailCollaborationData = [
    {
      title: "Email Solutions",
      description:
        "Our email solutions offer secure, reliable, and scalable email hosting services with spam protection, encryption, and backup options. Businesses can opt for cloud-based or on-premise email servers, ensuring data security and compliance.",
      image: emailSolutionsImg,
    },
    {
      title: "Office 365",
      description:
        "Office 365 is a cloud-based productivity suite from Microsoft, including Outlook, Word, Excel, Teams, and SharePoint. It enables real-time collaboration and secure cloud storage through OneDrive and SharePoint.",
      image: office365Img,
    },
    {
      title: "G Suite (Google Workspace)",
      description:
        "Google Workspace provides professional email services with Gmail, along with integrated tools like Google Drive, Meet, and Docs. It ensures efficient team collaboration and offers enterprise-grade security.",
      image: googleWorkspaceImg,
    },
    {
      title: "Cloud Zimbra",
      description:
        "Cloud Zimbra is an open-source email and collaboration platform that offers email, contacts, calendar, file sharing, and task management. It is a cost-effective alternative to Microsoft Exchange and G Suite.",
      image: cloudZimbraImg,
    },
    {
      title: "Hybrid Email Solutions",
      description:
        "Hybrid Email Solutions combine cloud-based and on-premise email hosting to offer flexibility, cost-efficiency, and enhanced security. It is ideal for businesses requiring custom email management.",
      image: hybridEmailImg,
    },
  ];

  return (
    <div className="mail-collaboration">
      <h1>Mail & Collaboration</h1>
      <p>
        Enable seamless business communication and collaboration with our secure and efficient email solutions.
      </p>
      <div className="mail-list">
        {mailCollaborationData.map((item, index) => (
          <div className={`mail-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="mail-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="mail-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MailCollaboration;
