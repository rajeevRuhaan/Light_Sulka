import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PaymentPopup from "./PaymentPopup";
import "./Payments.css";

const Payments = () => {
  const [showModel, setShowModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModel(true);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="container_payments">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked
                    required
                  ></input>
                  <label for="creditCard">Credit Card</label>
                </div>

                <div className="form-check">
                  <input
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked
                    required
                  ></input>
                  <label for="debitCard">Debit Card</label>
                </div>

                <div className="form-check">
                  <input
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked
                    required
                  ></input>
                  <label for="bankTransfer">Bank Transfer</label>
                </div>
                <div className="form-check">
                  <input
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked
                    required
                  ></input>
                  <label for="paypal">PayPal</label>
                </div>
              </div>
              <div className="col-md-6">
                <form action="">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                        required
                      ></input>
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-3">
                      <input
                        type="text"
                        placeholder="Expiration"
                        className="form-control"
                        required
                      ></input>
                    </div>
                    <div className="form-group col-md-3">
                      <input
                        type="text"
                        placeholder="CVV"
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12 text-center">
                      <Button type="submit" className="form-control">
                        Pay
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Form>
      {showModel && (
        <PaymentPopup show={showModel} onClose={() => setShowModel(false)} />
      )}
    </>
  );
};

export default Payments;
