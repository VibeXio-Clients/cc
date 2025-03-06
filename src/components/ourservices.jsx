import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/ourservices.css';
import { ArrowRight, CheckCircle } from 'lucide-react';

function App() {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const services = [
    {
      title: "Cloud Labs",
      icon: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      path: "/cloud-labs",
      items: ["Microsoft Azure", "Amazon Web Services", "Google Cloud", "Private Cloud", "Virtual Labs"],
    },
    {
      title: "Mail and Collaborations",
      icon: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW1haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      path: "/mail-collaboration",
      items: ["Email Solutions", "Office 365", "Gsuite", "Cloud Zimbra", "Hybrid Email Solutions"],
    },
    {
      title: "Email Security",
      icon: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VjdXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      path: "/email-security",
      items: [
        "Advance Threat Protection",
        "DMARC Monitor",
        "Phishing Simulations",
        "BMI",
      ],
    },
    {
      title: "Cyber Security",
      icon: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      path: "/cybersecurity",
      items: [
        "Fortinet NGFW",
        "Checkpoint",
        "Palo Alto",
        "Web Application Firewall",
        "Endpoint Security",
        "SSL Certificate",
      ],
    },
    {
      title: "Web and App Development",
      icon: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      path: "/web-app-development",
      items: [
        "Custom Web Development",
        "Mobile App Development",
        "E-Commerce Solutions",
        "Enterprise Applications",
      ],
    },
    {
      title: "Backup and Identity Management",
      icon: "https://images.unsplash.com/photo-1614064642639-e398cf05badb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMGJhY2t1cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      path: "/backup-identity",
      items: ["Acronis Cloud Backup", "AD Azure"],
    },
    {
      title: "Infrastructure Solutions",
      icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VydmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      path: "/infrastructure-solutions",
      items: [
        "IT Hardware",
        "Software Solutions",
        "Annual Maintenance Contract (AMC)",
        "Office Automation",
        "Video & Audio Conferencing",
      ],
    },
    {
      title: "Cloud Consulting",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      path: "/cloud-consulting",
      items: [
        "DevOps Labs",
        "Kubernetes",
        "SAP",
        "Oracle Database",
        "Docker Services",
        "Big Data",
        "IBM",
        "Cisco Lab",
      ],
    },
  
  ];

  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  const handleLearnMore = (path) => {
    navigate(path); // Navigate to respective path
  };

  return (
    <div className="services-container">
      <div className="services-header-wrapper">
        <h1 className="services-heading">OUR SERVICES</h1>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeCard === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="service-card-inner">
              <div className="service-image-wrapper">
                <img src={service.icon} alt={service.title} className="service-image" />
                <div className="service-image-overlay"></div>
              </div>

              <h2 className="service-title">{service.title}</h2>

              <ul className="service-list">
                {service.items.map((item, i) => (
                  <li key={i} style={{ animationDelay: `${0.1 * i}s` }}>
                    <CheckCircle className="service-icon" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-button-container">
                <button className="service-button" onClick={() => handleLearnMore(service.path)}>
                  Learn More <ArrowRight className="button-icon" size={16} />
                </button>
              </div>

              <div className="service-card-shine"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
