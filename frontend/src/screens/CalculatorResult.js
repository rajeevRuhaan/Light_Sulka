import React from "react";
import Button from "react-bootstrap/Button";
import "./CalculatorResult.css";

const CalculatorResult = ({ result, onClose, input }) => {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <p>
            {" "}
            {input.gender}
            <i
              class="far fa-times-circle"
              onClick={onClose}
              style={{ width: "100px", height: "50px" }}
            ></i>
          </p>
          <h1>Calculator</h1>
          <div>
            <h3>Your BMR result</h3>
            <p>
              {" "}
              {result} <span>Calories/day</span>
            </p>
          </div>
          <Button onClick={onClose}>Close</Button>
          <Button>Proceed to Product</Button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResult;
