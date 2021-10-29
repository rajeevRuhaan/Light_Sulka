import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CalculatorResult.css";

const CalculatorResult = ({ result, onClose, reCal }) => {
  const [productid, setproductid] = useState();

  const getProductLink = async () => {
    const datas = await axios.get("/api/products");

    function productId() {
      if (reCal < 1000) {
        console.log("1000");
        return setproductid(datas.data[0]._id);
      } else if (reCal < 1500) {
        console.log("1500");
        return setproductid(datas.data[1]._id);
      } else if (reCal < 2000) {
        console.log("2000");
        return setproductid(datas.data[2]._id);
      } else {
        console.log("2000+");
        return setproductid(datas.data[3]._id);
      }
    }
    productId();
  };
  getProductLink();

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <p>
            {" "}
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
              <b>{result}</b> <span>Calories/day</span>
            </p>
          </div>
          <Button onClick={onClose}>Close</Button>
          {/* <Button onClick={() => getProductLink()}>Proceed to Product</Button> */}
          <p>
            Based on you desired weight plan, your daily meal should contain
            <b> {reCal}</b> Kcal.
          </p>
          <p>
            Click <b>View </b>button to see our recomended food plan
          </p>
          <Link to={`/product/${productid}`} className="info__button">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResult;
