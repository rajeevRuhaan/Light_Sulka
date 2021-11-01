import React, { Component } from "react";
import emailjs from "emailjs-com";

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
      <form className="contact-form" onSubmit={this.emailSubscriptions}>
        <label> Become a subscriber! </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email here..."
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SubscribeMail;
