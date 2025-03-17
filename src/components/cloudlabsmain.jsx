import React from "react";
import "./styles/cloudlabsmain.css"

const CloudLabsMain = () => {
  return (
    <div className="cloudmain-labs-container">
      <h2 className="cloudmain-title">Cloud Labs</h2>
      <ul className="cloudmain-list">
        <li>Microsoft Azure</li>
        <li>Amazon Web Services</li>
        <li>Google Cloud</li>
        <li>Private Cloud</li>
        <li>Virtual Labs</li>
      </ul>
      <div className="cloudmain-image">
       <img
        src="./assets/cloudlabsmain.png"
        alt="Cloud Labs"
      />
      </div>
    </div>
  );
};

export default CloudLabsMain;
