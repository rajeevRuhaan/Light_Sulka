import React, { Component } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./SubscribeMail.css";

class SubscribeMail extends Component {
  emailSubscriptions(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b9t6xrt",
        "template_oobdr8o",
        e.target,
        "user_9PpXlE6kvmCLobn3FYqXD"
      )
      .then(
        (result) => {
          alert("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  }

  render() {
    return (
      <Form className="contact-form" onSubmit={this.emailSubscriptions}>
        <Form.Label className="subscribe_label">
          {" "}
          Become a subscriber!{" "}
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email here..."
        />
        <Col className="subscribe_col">
          <Button variant="success" type="submit" className="subscribe_btn">
            Subscribe
          </Button>
        </Col>
      </Form>
    );
  }
}
export default SubscribeMail;
