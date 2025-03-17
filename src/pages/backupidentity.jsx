import React from "react";
import "./backupidentity.css";

// Import images
import acronisBackupImg from "./images/acronis.png";
import azureAdImg from "./images/ActiveDirectory.png";

const BackupIdentity = () => {
  const backupData = [
    {
      title: "Acronis Cloud Backup",
      description:
        "Acronis provides secure cloud backup solutions to protect critical business data against ransomware, accidental deletion, and cyber threats.",
      image: acronisBackupImg,
    },
    {
      title: "Active Directory Azure (AD Azure)",
      description:
        "AD Azure enables secure identity management by providing centralized user authentication, role-based access control, and multi-factor authentication (MFA).",
      image: azureAdImg,
    },
  ];

  return (
    <div className="backup-identity">
      <h1>Backup & Identity Management</h1>
      <p>
        Acronis provides secure cloud backup solutions to protect critical business data against ransomware, accidental deletion, and cyber threats.
      </p>

      <div className="backup-list">
        {backupData.map((item, index) => (
          <div className={`backup-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="backup-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="backup-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackupIdentity;
