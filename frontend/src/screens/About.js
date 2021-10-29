import React from "react";
import image from "../assets/food1.jpg";
import rajeev from "../assets/rajeev.jpg";
import "./About.css";

const About = () => {
  return (
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
  );
};

export default About;
