import React from "react";
import image from "../assets/food1.jpg";
import rajeev from "../assets/rajeev.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="aboutus">
        <h3>About Light Sulka</h3>
        <p>
          We prepare healthy food and recomend those persons who is overweight
          and want to loose weight. We do not recomed our diet plan who have
          health issue such as diabetese, heart disease etc.{" "}
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
      </div>
      <hr />
      <h1>Site designer and Developers</h1>
      <div className="aboutpage">
        <div className="about-card">
          <img src={image} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className="link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dariwka/Light_Sulka"
              >
                {" "}
                <button>
                  <i class="fab fa-github fa-lg" />
                  Github link
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dariwka/Light_Sulka"
              >
                {" "}
                <button>Portfolio link</button>
              </a>
            </div>
          </div>
        </div>
        <div className="about-card">
          <img src={image} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className="link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dariwka/Light_Sulka"
              >
                {" "}
                <button>
                  <i class="fab fa-github fa-lg" />
                  Github link
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dariwka/Light_Sulka"
              >
                {" "}
                <button>Portfolio link</button>
              </a>
            </div>
          </div>
        </div>
        <div className="about-card">
          <img src={rajeev} alt="Avatar" />
          <div className="container">
            <h4>
              <b>Rajeev Sah</b>
            </h4>
            <p>Full Stack Developer</p>
            <div className="link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rajeevRuhaan"
              >
                {" "}
                <button>
                  <i class="fab fa-github fa-lg" />
                  Github link
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://heuristic-sammet-e3dfcd.netlify.app/"
              >
                {" "}
                <button>Portfolio link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
