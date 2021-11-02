import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import CalculatorResult from "./CalculatorResult";

import "./BRMcalculator.css";

const BRMcalculator = () => {
  const [inputData, setInputData] = useState({
    gender: "",
    weight: "",
    age: "",
    height: "",
    currentWeight: "",
    active: "",
  });

  const [bmrResult, setBMRResult] = useState(0);
  const [showModel, setShowModel] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const calculateBMR = () => {
    let bmi;
    if (inputData.gender === "male") {
      const bmrMale =
        9.99 * inputData.currentWeight +
        6.25 * inputData.height -
        4.92 * inputData.age +
        5;
      if (inputData.active === "lessActive") {
        bmi = bmrMale * 1.2;
      } else if (inputData.active === "middleActive") {
        bmi = bmrMale * 1.46;
      } else {
        bmi = bmrMale * 1.72;
      }
    } else {
      const bmrFemale =
        9.99 * inputData.currentWeight +
        6.25 * inputData.height -
        4.92 * inputData.age -
        161;
      if (inputData.active === "lessActive") {
        bmi = bmrFemale * 1.2;
      } else if (inputData.active === "middleActive") {
        bmi = bmrFemale * 1.46;
      } else {
        bmi = bmrFemale * 1.72;
      }
    }
    console.log(Math.floor(bmi));
    return Math.floor(bmi);
  };
  // calculate required calories
  const weightLoose = inputData.currentWeight - inputData.weight;
  console.log(weightLoose);
  function recCalculateCalories() {
    if (weightLoose < 11) {
      return Math.floor(bmrResult - bmrResult * 0.25);
    } else if (weightLoose < 21) {
      return Math.floor(bmrResult - bmrResult * 0.4);
    } else {
      return Math.floor(bmrResult - bmrResult * 0.55);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBMRResult(calculateBMR());
    setShowModel(true);
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h1 className="brm_title">BMR calculator </h1>
      <Form
        autoComplete="off"
        className="form-bmi"
        id="personal"
        onSubmit={handleSubmit}
      >
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <h3 className="brm_label">Select your gender</h3>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type={type}
              value="male"
              onChange={handleChange}
              id={`inline-${type}-male`}
              required
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type={type}
              value="female"
              onChange={handleChange}
              id={`inline-${type}-female`}
              required
            />
          </div>
        ))}
        <h3 className="brm_label">What is your desire weight?</h3>
        <Form.Control
          className="form-control_brm"
          type="number"
          min="40"
          name="weight"
          onChange={handleChange}
          placeholder="Weight in Kg"
          required
        />
        <h3 className="brm_label">Let's check another data?</h3>
        <Form.Control
          className="form-control_brm"
          type="number"
          min="20"
          max="60"
          name="age"
          onChange={handleChange}
          placeholder="Age (years)"
          required
        />{" "}
        <Form.Control
          className="form-control_brm"
          type="number"
          min="130"
          max="180"
          name="height"
          onChange={handleChange}
          placeholder="Height (cm)"
          required
        />
        <Form.Control
          className="form-control_brm"
          type="number"
          min="30"
          max="100"
          name="currentWeight"
          onChange={handleChange}
          placeholder="Current Weight (Kg)"
          required
        />
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <h3 className="brm_label">How active are you?</h3>
            <Form.Check
              inline
              label="Less active"
              name="active"
              type={type}
              value="lessActive"
              onChange={handleChange}
              id={`inline-${type}-lessactive`}
              required
            />
            <Form.Check
              inline
              label="Middle active"
              name="active"
              type={type}
              value="middleActive"
              onChange={handleChange}
              id={`inline-${type}-middleactive`}
              required
            />
            <Form.Check
              inline
              label="High active"
              name="active"
              type={type}
              value="highActive"
              onChange={handleChange}
              id={`inline-${type}-highactive`}
              required
            />
          </div>
        ))}
        <Col className="brm_btn_col">
          <Button className="brm_btn" variant="success" type="submit">
            Calculate
          </Button>
        </Col>
      </Form>

      {showModel && (
        <CalculatorResult
          show={showModel}
          onClose={() => setShowModel(false)}
          reCal={recCalculateCalories()}
          result={bmrResult}
        />
      )}
    </div>
  );
};

export default BRMcalculator;
