import React from "react";
import Button from "react-bootstrap/Button";

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <p>
            {" "}
            <i
              className="far fa-times-circle"
              onClick={onClose}
              style={{ width: "100px", height: "50px" }}
            ></i>
          </p>
          <h1>Calculator</h1>
          <div>
            <h3>Your BMR result</h3>
            <p>text</p>
          </div>
          <p>Text</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
