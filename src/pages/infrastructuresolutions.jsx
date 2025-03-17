import React from "react";
import "./infrastructuresolutions.css";

// Import images
import itHardwareImg from "./images/it-hardware.png";
import softwareSolutionsImg from "./images/softwaresolutions.png";
import amcImg from "./images/amc.png";
import officeAutomationImg from "./images/officeautomation.png";
import videoConferencingImg from "./images/video-conference.png";

const InfrastructureSolutions = () => {
  const infraData = [
    {
      title: "IT Hardware",
      description:
        "We provide enterprise-grade servers, networking devices, and storage solutions to meet business demands.",
      image: itHardwareImg,
    },
    {
      title: "Software Solutions",
      description:
        "Our software solutions include business automation, security, and enterprise application deployment.",
      image: softwareSolutionsImg,
    },
    {
      title: "Annual Maintenance Contract (AMC)",
      description:
        "We offer proactive IT support and maintenance services to ensure smooth operations and minimal downtime.",
      image: amcImg,
    },
    {
      title: "Office Automation",
      description:
        "Implement smart office solutions, including document management, workflow automation, and collaboration tools.",
      image: officeAutomationImg,
    },
    {
      title: "Video & Audio Conferencing",
      description:
        "We provide secure video conferencing systems for remote collaboration and virtual meetings.",
      image: videoConferencingImg,
    },
  ];

  return (
    <div className="infrastructure-solutions">
      <h1>Infrastructure Solutions</h1>
      <p>
        We provide enterprise-grade servers, networking devices, and storage solutions to meet business demands.
      </p>

      <div className="infra-list">
        {infraData.map((item, index) => (
          <div className={`infra-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="infra-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="infra-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureSolutions;
