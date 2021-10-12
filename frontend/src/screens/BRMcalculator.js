import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  console.log(inputData);

  const handleSubmit = (e) => {
    e.preventDefault();
    let bmi;
    if (inputData.gender === "male") {
      const bmrMale =
        9.99 * inputData.weight +
        6.25 * inputData.height -
        4.92 * inputData.age +
        5;
      if (inputData.active === "lessactive") {
        bmi = bmrMale * 1.2;
        return bmi;
      } else if (inputData.active === "middleActive") {
        bmi = bmrMale * 1.46;
        return bmi;
      } else {
        bmi = bmrMale * 1.72;
        return bmi;
      }
    } else {
      console.log("you are female");
    }
    console.log(bmi);
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
        <h3>What is your desire weight?</h3>
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
        <Button type="submit">Calculate</Button>
      </Form>
    </div>
  );
};

export default BRMcalculator;
