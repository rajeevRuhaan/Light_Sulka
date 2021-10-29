import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerlinks">
        {" "}
        <Link to="/prices">Prices</Link>{" "}
        <Link to="/calculator">BMR Calculator</Link>{" "}
        <Link to="/about">About Us</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Dariwka/Light_Sulka"
          className="github"
          title="LightSulka github link"
        >
          <i class="fab fa-github fa-2x" /> Github link of project
        </a>
        <div className="subscribe">
          <b>Subscribe</b>
          <input type="email" placeholder="e-mail address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer_bottom">
        <p>Copyrights © Light Sulka 2021</p>
      </div>
    </div>
  );
};

export default Footer;
