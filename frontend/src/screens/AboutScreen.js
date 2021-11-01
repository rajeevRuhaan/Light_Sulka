import React from "react";
import "./AboutScreen.css";
import diana from "../assets/diana.png";
import sagar from "../assets/sagar.jfif";
import rajeev from "../assets/rajeev.jfif";

const AboutScreen = () => {
  return (
    <div className="about_section">
      <h2 className="about_title">Information about App developers:</h2>
      <div className="dev_section">
        <ul>
          <li>Diana Korotkevica</li>
          <li>Sah Rajeev</li>
          <li>Aryal Sagar</li>
        </ul>
        <div className="img_section">
          <figure class="dev_img">
            <img src={diana} alt="diana"></img>
            <figcaption>
              Diana Korotkevica
              <div className="social_section">
                <a className="social_links" href="https://github.com/Dariwka">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="social_links"
                  href="https://www.linkedin.com/in/diana-korotkevica-70b62a207/"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  className="social_links"
                  href="https://public.bc.fi/s2100157/portfolio/index.html"
                >
                  <i className="fas fa-house-user" />
                </a>
              </div>
            </figcaption>
          </figure>

          <figure class="dev_img">
            <img src={rajeev} alt="rajeev"></img>
            <figcaption>
              Sah Rajeev
              <div className="social_section">
                <a
                  className="social_links"
                  href="https://github.com/rajeevRuhaan"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="social_links"
                  href="https://www.linkedin.com/in/rajeev-sah-7a73065b/"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  className="social_links"
                  href="https://heuristic-sammet-e3dfcd.netlify.app/"
                >
                  <i className="fas fa-house-user" />
                </a>
              </div>
            </figcaption>
          </figure>

          <figure class="dev_img">
            <img src={sagar} alt="sagar"></img>
            <figcaption>
              Aryal Sagar
              <div className="social_section">
                <a
                  className="social_links"
                  href="https://github.com/sagar-aryal"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="social_links"
                  href="https://www.linkedin.com/in/sagar-aryal-83a576140/"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  className="social_links"
                  href="https://sagar-aryal.github.io/PORTFOLIO/#/"
                >
                  <i className="fas fa-house-user" />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
