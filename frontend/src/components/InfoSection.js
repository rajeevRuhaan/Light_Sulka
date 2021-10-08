import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="section">
      <div className="info">
        <div className="info_item">
          <div className="info_item_icon">
            <i class="fas fa-shipping-fast"></i>
          </div>
          <div className="info_item_text">
            <p>Delivery every 2 days from 6.00 -12.00</p>
          </div>
        </div>
        <div className="info_item">
          <div className="info_item_icon">
            <i class="fas fa-hand-sparkles"></i>
          </div>
          <div className="info_item_text">
            <p>Modern and Safe production</p>
          </div>
        </div>
        <div className="info_item">
          <div className="info_item_icon">
            <i class="fas fa-utensils"></i>
          </div>
          <div className="info_item_text">
            <p>Menu does not repeat during the month </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
