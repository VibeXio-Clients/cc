import React from "react";
import "./styles/products.css";

const Products = () => {
  return (
    <section id="products-section" className="products-container">
      <div className="products-container">
        <div className="products-title">
          <h2>Products</h2>
        </div>
        <div className="products-list">
          <h3>Infrastructure Solutions</h3>
          <ul> {/* Changed from <ol> to <ul> */}
            <li>IT Hardware</li>
            <li>Software Solutions</li>
            <li>Annual Maintenance Contract</li>
            <li>Office Automation</li>
            <li>Biometric & Attendance Solutions</li>
            <li>IP PX</li>
            <li>Video Audio Conferencing System</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
