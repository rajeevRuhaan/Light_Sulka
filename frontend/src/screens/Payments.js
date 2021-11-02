import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import PaymentPopup from "./PaymentPopup";
import "./Payments.css";

const Payment = () => {
  const [validated, setValidated] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setShowModel(true);
      e.target.reset();
    }

    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="**** **** **** 3193"
              required
            />
            <Form.Control.Feedback type="invalid">
              Must be 16 cracters
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>CVC</Form.Label>
            <Form.Control type="text" placeholder="CVC" required />
            <Form.Control.Feedback type="invalid">
              Security code.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Month</Form.Label>
            <Form.Control type="number" placeholder="Month" required />
            <Form.Control.Feedback type="invalid">
              month of card
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Year</Form.Label>
            <Form.Control type="number" placeholder="year" required />
            <Form.Control.Feedback type="invalid">
              year of card.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
      {showModel && (
        <PaymentPopup show={showModel} onClose={() => setShowModel(false)} />
      )}
    </>
  );
};

export default Payment;
