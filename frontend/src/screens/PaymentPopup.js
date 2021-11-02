import React from "react";
import Button from "react-bootstrap/Button";

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <h3>Thank you for your payment"</h3>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
