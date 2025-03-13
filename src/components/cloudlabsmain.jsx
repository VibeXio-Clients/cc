import React from "react";
import "./styles/cloudlabsmain.css"

const CloudLabsMain = () => {
  return (
    <div className="cloud-labs-container">
      <h2 className="cloud-title">Cloud Labs</h2>
      <ul className="cloud-list">
        <li>Microsoft Azure</li>
        <li>Amazon Web Services</li>
        <li>Google Cloud</li>
        <li>Private Cloud</li>
        <li>Virtual Labs</li>
      </ul>
      <div className="cloud-image">
       <img
        src="./assets/cloudlabsmain.png"
        alt="Cloud Labs"
      />
      </div>
    </div>
  );
};

export default CloudLabsMain;
