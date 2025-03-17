import React from "react";
import "./cloudconsulting.css";

import devOpsImg from "./images/devopslab.png";
import kubernetesImg from "./images/Kubernet.png";
import sapImg from "./images/sap.png";
import oracleDbImg from "./images/oracle_database.png";
import dockerImg from "./images/dockerservices.png";
import bigDataImg from "./images/bigdata.png";
import ibmCloudImg from "./images/IBM_Cloud.png";
import ciscoLabImg from "./images/ciscolab.png";

const CloudConsultingSolutions = () => {
  const cloudSolutions = [
    {
      title: "DevOps Labs",
      description:
        "Enhance software delivery with CI/CD pipelines, infrastructure automation, and cloud-native DevOps practices for faster, more efficient deployments.",
      image: devOpsImg,
    },
    {
      title: "Kubernetes",
      description:
        "Leverage container orchestration with Kubernetes to manage and scale applications effortlessly across cloud environments.",
      image: kubernetesImg,
    },
    {
      title: "SAP",
      description:
        "Optimize enterprise operations with SAP cloud solutions, ensuring seamless ERP integration, scalability, and real-time data processing.",
      image: sapImg,
    },
    {
      title: "Oracle Database",
      description:
        "Secure and manage mission-critical databases with Oracle Cloud solutions, offering high performance, reliability, and automation.",
      image: oracleDbImg,
    },
    {
      title: "Docker Services",
      description:
        "Deploy and manage containerized applications efficiently using Docker, ensuring portability and consistency across environments.",
      image: dockerImg,
    },
    {
      title: "Big Data",
      description:
        "Harness the power of Big Data analytics to process, analyze, and visualize large datasets for better decision-making.",
      image: bigDataImg,
    },
    {
      title: "IBM Cloud Solutions",
      description:
        "Leverage IBM Cloud for AI-powered analytics, hybrid cloud integration, and enterprise-grade security.",
      image: ibmCloudImg,
    },
    {
      title: "Cisco Lab",
      description:
        "Implement Cisco’s cloud networking solutions for secure, scalable, and high-performance infrastructure management.",
      image: ciscoLabImg,
    },
  ];

  return (
    <div className="cloud-consulting">
      <h1>Cloud Consulting & Solutions</h1>
      <p>
        Empower your business with our cutting-edge cloud consulting services, ensuring scalability, security, and seamless infrastructure management.
      </p>

      <div className="cloud-list">
        {cloudSolutions.map((item, index) => (
          <div className={`cloud-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="cloud-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="cloud-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudConsultingSolutions;
