import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselSlider.css";

const CarouselSlider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://images.unsplash.com/photo-1604908815567-c9727d53f92a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to our page</h3>
            <b>
              <p>We provide you healthy food plan.</p>
            </b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://images.unsplash.com/photo-1604908550665-327363165423?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Eat Healthy Food</h3>
            <p>Food is our fuel so lets eat haealthy food.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSlider;
