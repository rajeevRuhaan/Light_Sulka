import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CalculatorResult.css";

const CalculatorResult = ({ result, onClose, input }) => {
  const [productid, setproductid] = useState();

  const getProductLink = async () => {
    const datas = await axios.get("/api/products");

    if (result < 1000) {
      setproductid(datas.data[0]._id);
    } else if (result < 1500) {
      setproductid(datas.data[1]._id);
    } else if (result < 2000) {
      setproductid(datas.data[2]._id);
    } else {
      setproductid(datas.data[3]._id);
    }
  };
  getProductLink();

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
          {/* <Button onClick={() => getProductLink()}>Proceed to Product</Button> */}
          <Link to={`/product/${productid}`} className="info__button">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResult;
