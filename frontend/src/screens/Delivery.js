import React from "react";
import { Link } from "react-router-dom";
import "./Delivery.css";

const Delivery = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  required
                ></input>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control"
                  required
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="zip"
                  placeholder="Postal Code"
                  className="form-control"
                  required
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  placeholder="State"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  placeholder="Country"
                  className="form-control"
                  required
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12 text-center">
                <Link to="/payments" type="submit" className="form-control">
                  Proceed To Payment
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Uusima+Finland"
            width="550"
            height="275"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
