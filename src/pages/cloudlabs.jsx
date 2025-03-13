import React from "react";
import "./cloudlabs.css";

const CloudLabs = () => {
  return (
    <div className="cloud-labs">
      <h1>
        Cloud Labs
      </h1>
      <p>
        Our Cloud Labs provide hands-on environments for businesses, developers, and IT professionals to test, train, and deploy solutions on leading cloud platforms.
      </p>
      <ol>
        <li>
          <h2>Microsoft Azure</h2>
          <p>
            Microsoft Azure is a powerful cloud computing platform offering over 200 services for businesses. It provides secure cloud storage, virtual machines, AI-driven analytics, and networking solutions. Azure’s hybrid cloud capabilities allow businesses to seamlessly integrate on-premise and cloud resources. With advanced security and compliance standards, it ensures data protection and regulatory adherence. Azure supports DevOps, AI/ML, IoT, and database management, making it ideal for modern enterprises.
          </p>
        </li>
        <li>
          <h2>Amazon Web Services (AWS)</h2>
          <p>
            AWS is the most widely used cloud computing platform, offering on-demand compute power, storage, databases, AI, and machine learning. It supports businesses with high availability, scalability, and cost-efficient pricing models. AWS provides a secure infrastructure with multi-layered protection and disaster recovery solutions. With its pay-as-you-go pricing, businesses can optimize costs while leveraging over 200 cloud services.
          </p>
        </li>
        <li>
          <h2>Google Cloud</h2>
          <p>
            Google Cloud provides AI-powered cloud solutions, enabling businesses to build scalable, efficient applications. It offers compute, storage, and big data analytics tools, integrated with Google’s AI and machine learning capabilities. Google Cloud supports multi-cloud and hybrid cloud environments, providing flexibility and enhanced security. Its strong data analytics and Kubernetes support make it an excellent choice for big data and AI-driven businesses.
          </p>
        </li>
        <li>
          <h2>Private Cloud</h2>
          <p>
            A Private Cloud is a custom cloud infrastructure tailored to a company’s specific needs, ensuring greater control, security, and compliance. It allows organizations to host applications and store data within their internal infrastructure while benefiting from cloud scalability and automation. Private Clouds are ideal for businesses handling sensitive data, government agencies, and financial institutions that require strict security measures.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default CloudLabs;
