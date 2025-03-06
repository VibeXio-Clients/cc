import React from "react";
import "./styles/statssection.css";

const StatsSection = () => {
  const stats = [
    {
      img: "/assets/time.png",
      number: "20+",
      label: "Experts",
    },
    {
      img: "/assets/customers.png",
      number: "100+",
      label: "Customers",
    },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon">
            <img src={stat.img} alt={stat.label} className="icon-animation" />
          </div>
          <div className="stat-number number-animation">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
