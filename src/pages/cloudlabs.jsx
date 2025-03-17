import React from "react";
import "./cloudlabs.css";
import azureImg from "./images/azureImg.png";
import awsImg from "./images/awsImg.png";
import gcpImg from "./images/gcpImg.png";
import privateCloudImg from "./images/privateCloudImg.png";

const cloudServices = [
  {
    title: "Microsoft Azure",
    description:
      "Microsoft Azure is a powerful cloud computing platform offering over 200 services for businesses. It provides secure cloud storage, virtual machines, AI-driven analytics, and networking solutions. Azure’s hybrid cloud capabilities allow businesses to seamlessly integrate on-premise and cloud resources. With advanced security and compliance standards, it ensures data protection and regulatory adherence. Azure supports DevOps, AI/ML, IoT, and database management, making it ideal for modern enterprises.",
    image: azureImg,
  },
  {
    title: "Amazon Web Services (AWS)",
    description:
      "AWS is the most widely used cloud computing platform, offering on-demand compute power, storage, databases, AI, and machine learning. It supports businesses with high availability, scalability, and cost-efficient pricing models. AWS provides a secure infrastructure with multi-layered protection and disaster recovery solutions. With its pay-as-you-go pricing, businesses can optimize costs while leveraging over 200 cloud services.",
    image: awsImg,
  },
  {
    title: "Google Cloud",
    description:
      "Google Cloud provides AI-powered cloud solutions, enabling businesses to build scalable, efficient applications. It offers compute, storage, and big data analytics tools, integrated with Google’s AI and machine learning capabilities. Google Cloud supports multi-cloud and hybrid cloud environments, providing flexibility and enhanced security. Its strong data analytics and Kubernetes support make it an excellent choice for big data and AI-driven businesses.",
    image: gcpImg,
  },
  {
    title: "Private Cloud",
    description:
      "A Private Cloud is a custom cloud infrastructure tailored to a company’s specific needs, ensuring greater control, security, and compliance. It allows organizations to host applications and store data within their internal infrastructure while benefiting from cloud scalability and automation. Private Clouds are ideal for businesses handling sensitive data, government agencies, and financial institutions that require strict security measures.",
    image: privateCloudImg,
  },
];

const CloudLabs = () => {
  return (
    <div className="cloud-labs">
      <h1>Cloud Labs</h1>
      <p>
        Our Cloud Labs provide hands-on environments for businesses, developers,
        and IT professionals to test, train, and deploy solutions on leading
        cloud platforms.
      </p>

      <ol className="cloud-list">
        {cloudServices.map((service, index) => (
          <li key={index} className={`cloud-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="cloud-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="cloud-image">
              <img src={service.image} alt={service.title} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CloudLabs;
