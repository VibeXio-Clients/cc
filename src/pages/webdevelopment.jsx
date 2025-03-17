import React from "react";
import "./webdevelopment.css";

// Import images
import webDevImg from "./images/customwebdev.png";
import mobileAppImg from "./images/mobileappdev.png";
import ecommerceImg from "./images/ecommercesolution.png";

const WebAppDevelopment = () => {
  const webAppData = [
    {
      title: "Custom Web Development",
      description:
        "We develop responsive, high-speed websites using the latest technologies like React, Angular, and PHP.",
      image: webDevImg,
    },
    {
      title: "Mobile App Development",
      description:
        "We design Android & iOS applications with user-friendly interfaces, performance optimization, and security features.",
      image: mobileAppImg,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Our custom e-commerce platforms offer secure payment gateways, product management, and analytics.",
      image: ecommerceImg,
    },
  ];

  return (
    <div className="web-app-development">
      <h1>Web & App Development</h1>
      <p>We create secure, scalable, and high-performance web and mobile applications tailored to your business.</p>
      
      <div className="web-app-list">
        {webAppData.map((item, index) => (
          <div className={`web-app-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="web-app-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="web-app-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebAppDevelopment;
