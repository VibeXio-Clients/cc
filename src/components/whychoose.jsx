import React from "react";
import "./styles/whychoose.css";

const WhyChoose = () => {
  const points = [
    {
      title: "Expertise in Cloud & IT Infrastructure",
      description: "We bring years of experience in delivering high-performance technology solutions.",
    },
    {
      title: "Scalability & Security",
      description: "Our solutions are designed to grow with your business while ensuring top-tier security.",
    },
    {
      title: "End-to-End Support",
      description: "We offer 24/7 technical assistance to keep your business running smoothly.",
    },
    {
      title: "Custom IT Solutions",
      description: "We tailor our services to meet your unique business needs, ensuring maximum efficiency and ROI.",
    },
  ];

  return (
    <div className="why-choose-container">
      <div className="why-choose-heading">
        Why Choose CloudCave
      </div>
      <ul className="why-choose-list">
        {points.map((point, index) => (
          <li key={index} className="why-choose-item">
            <span className="check-symbol">✔️</span>
            <div>
              <strong>{point.title}</strong> – {point.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChoose;
