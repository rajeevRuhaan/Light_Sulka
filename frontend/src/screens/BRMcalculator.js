import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
  console.log(inputData);

  const calculateBMR = () => {
    let bmi;
    if (inputData.gender === "male") {
      console.log("You are male!");
      const bmrMale =
        9.99 * inputData.weight +
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
      console.log("you are female!");
      const bmrFemale =
        9.99 * inputData.weight +
        6.25 * inputData.height -
        4.92 * inputData.age +
        -161;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setBMRResult(calculateBMR());
  };

  return (
    <div className="form-container">
      <h1>BMR calculator </h1>
      <Form
        autoComplete="off"
        className="form-bmi"
        id="personal"
        onSubmit={handleSubmit}
      >
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <h3>Select your gender</h3>
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
        <h3>What is your desire weight?</h3>
        <Form.Control
          type="text"
          name="weight"
          onChange={handleChange}
          placeholder="Weight in Kg"
          required
        />
        <h3>Let's check another data?</h3>
        <Form.Control
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Age (years)"
          required
        />{" "}
        <Form.Control
          type="text"
          name="height"
          onChange={handleChange}
          placeholder="Height (cm)"
          required
        />
        <Form.Control
          type="text"
          name="currentWeight"
          onChange={handleChange}
          placeholder="Current Weight (Kg)"
          required
        />
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <h3>How active are you?</h3>
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
        <Button type="submit" onClick={() => setShowModel(true)}>
          Calculate
        </Button>
      </Form>

      {showModel && (
        <CalculatorResult
          show={showModel}
          onClose={() => setShowModel(false)}
          result={bmrResult}
          input={inputData}
        />
      )}
    </div>
  );
};

export default BRMcalculator;
