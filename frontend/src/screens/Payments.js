import React from "react";
import { Link } from "react-router-dom";

const Payments = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-check">
            <input
              name="paymentMethod"
              type="radio"
              class="form-check-input"
              checked
              required
            ></input>
            <label for="creditCard">Credit Card</label>
          </div>

          <div className="form-check">
            <input
              name="paymentMethod"
              type="radio"
              class="form-check-input"
              checked
              required
            ></input>
            <label for="debitCard">Debit Card</label>
          </div>

          <div className="form-check">
            <input
              name="paymentMethod"
              type="radio"
              class="form-check-input"
              checked
              required
            ></input>
            <label for="bankTransfer">Bank Transfer</label>
          </div>
          <div className="form-check">
            <input
              name="paymentMethod"
              type="radio"
              class="form-check-input"
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
                <Link to="/" type="submit" className="form-control">
                  Checkout
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payments;
