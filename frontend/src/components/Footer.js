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
      <Container>
        <Row>
          <Col>
            <Row>
              <Link to="/prices">Prices</Link>
            </Row>
            <Row>
              <Link to="/calculator">BMR Calculator</Link>
            </Row>
          </Col>
          <Col>
            <Row>
              <Link to="/payments">Payments</Link>
            </Row>
            <Row>
              <Link to="/delivery">Delivery</Link>
            </Row>
          </Col>
          <Col>
            <Row>
              <Link to="/">About Us</Link>
            </Row>
            <div className="social-networks">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dariwka/Light_Sulka"
                className="github"
                title="our github"
              >
                <i class="fab fa-github" />
              </a>
              <a
                href=""
                className="facebook"
                rel="noopener noreferrer"
                target="_blank"
                title="facebook"
              >
                <i class="fab fa-facebook" />
              </a>
              <a
                href=""
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
                title="instagram"
              >
                <i class="fab fa-instagram" />
              </a>
            </div>
          </Col>
          <Col>
            <Row>
              <p>Subscribe</p>
              <input type="email" />
              <button>Subscribe</button>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
      <div className="footer_bottom">
        <p>Copyrights © Light Sulka 2021</p>
      </div>
    </div>
  );
};

export default Footer;
