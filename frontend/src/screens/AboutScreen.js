import React from "react";
import "./AboutScreen.css";
import diana from "../assets/diana.png";
import sagar from "../assets/sagar.jfif";
import rajeev from "../assets/rajeev.jfif";

const AboutScreen = () => {
  return (
    <div className="about_section">
      <h3>About Light Sulka</h3>
      <p>
        We prepare healthy food and recomend those persons who is overweight and
        want to loose weight. We do not recomed our diet plan who have health
        issue such as diabetese, heart disease etc.{" "}
      </p>
      <h3>Who should follow our diet plan?</h3>
      <p>
        Those person who is over weight and want to loose weight should
        strictely follow the diet plan and physical activity.
      </p>
      <h3>What is BMR?</h3>
      <p>
        Basal metabolic rate which means minimum number of calories that your
        body burns while resting. This is the absolute bare minimum that you
        must consume so that your body can burn those calories on breathing,
        digesting food and other inviluntary actions.
      </p>
      <p>
        Those who are overweight and obese have enought fat to utilize during
        fasting. Our diet plan is based on calories measurement. To loose
        weight, we categorise based on desire weight and current weight.{" "}
      </p>
      <ul>
        <li>
          To loose below 10 kg. Food plan goes -15% reduction in calories then
          calculated BMR value.{" "}
        </li>
        <li>
          To loose below 10 - 40 kg. Food plan goes -20% reduction in calories
          than calculated BMR value.
        </li>
        <li>
          To loose below more than 40 kg. Food plan goes -25% reduction in
          calories than calculated BMR value.
        </li>
      </ul>
      <h3>Information about App developers:</h3>
      <div className="dev_section">
        <ul className="a">
          <li>Diana Korotkevica</li>
          <li>Sah Rajeev</li>
          <li>Aryal Sagar</li>
        </ul>
        <div className="img_section">
          <figure className="dev_img">
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
          <figure className="dev_img">
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
          <figure className="dev_img">
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
