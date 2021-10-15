import React from "react";

const Prices = ({ id, price, days }) => {
  return (
    <div key={id} value={days} onClick={(e) => e.target.value}>
      <div className="price_perday">
        <i class="fas fa-euro-sign">{price}</i>/ per day
      </div>
      <strong>{days} days</strong>
    </div>
  );
};

export default Prices;
