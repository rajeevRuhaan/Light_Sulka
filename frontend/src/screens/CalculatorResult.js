import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CalculatorResult.css";

const CalculatorResult = ({ result, onClose, input }) => {
  const [productid, setproductid] = useState();
  const [reCalcCalories, setReCalcCalories] = useState();

  const getProductLink = async () => {
    const datas = await axios.get("/api/products");

    const desiredWeightLoose = input.currentWeight - input.weight;

    const recCalculateCalories = () => {
      if (desiredWeightLoose < 10) {
        return result - result * 0.15;
      } else if (desiredWeightLoose < 20) {
        return result - result * 0.2;
      } else {
        return result - result * 0.25;
      }
    };

    setReCalcCalories(recCalculateCalories);

    if (recCalculateCalories < 1000) {
      setproductid(datas.data[0]._id);
    } else if (recCalculateCalories < 1500) {
      setproductid(datas.data[1]._id);
    } else if (recCalculateCalories < 2000) {
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
              <b>{result}</b> <span>Calories/day</span>
            </p>
          </div>
          <Button onClick={onClose}>Close</Button>
          {/* <Button onClick={() => getProductLink()}>Proceed to Product</Button> */}
          <p>
            Based on you desired weight plan, your daily meal should contain
            <b> {reCalcCalories}</b> Kcal.
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
