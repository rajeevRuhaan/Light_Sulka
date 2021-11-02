import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import SubscribeMail from "./SubscribeMail";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer_container">
        <Row>
          <Col>
            <Row>
              <Link className="social_link" to="/about">
                About Us
              </Link>
            </Row>
          </Col>
          <Col>
            <Row>
              <Link className="social_link" to="/calculator">
                BMR Calculator
              </Link>
            </Row>
          </Col>
          <Col>
            <Row>
              <Link className="social_link" to="/prices">
                Prices
              </Link>
            </Row>
          </Col>
          <Col>
            <Row>
              <SubscribeMail />
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="footer_bottom">
        <p className="footer_p">Copyrights © Light Sulka 2021</p>
        <div className="social-networks">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Dariwka/Light_Sulka"
            className="github"
            title="our github"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          <a
            href="/#"
            className="facebook"
            rel="noopener noreferrer"
            target="_blank"
            title="facebook"
          >
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a
            href="/#"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="instagram"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
