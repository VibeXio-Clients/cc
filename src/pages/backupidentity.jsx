import React from "react";
import "./backupidentity.css";

const BackupIdentity = () => {
  return (
    <div className="backup-identity">
      <h1>
        Backup & Identity Management 
      </h1>
      <p>
        Acronis provides secure cloud backup solutions to protect critical
        business data against ransomware, accidental deletion, and cyber
        threats.
      </p>
      <ol>
        <li>
          <h2>Acronis Cloud Backup</h2>
          <p>
            Acronis provides secure cloud backup solutions to protect critical
            business data against ransomware, accidental deletion, and cyber
            threats.
          </p>
        </li>
        <li>
          <h2>Active Directory Azure (AD Azure)</h2>
          <p>
            AD Azure enables secure identity management by providing centralized
            user authentication, role-based access control, and multi-factor
            authentication (MFA).
          </p>
        </li>
      </ol>
    </div>
  );
};

export default BackupIdentity;
