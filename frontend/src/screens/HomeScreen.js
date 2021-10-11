import "./HomeScreen.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Components
import Programs from "../components/Programs";
import CarouselSlider from "../components/CarouselSlider";
import InfoSection from "../components/InfoSection";

const HomeScreen = () => {
  return (
    <>
      <CarouselSlider />
      <InfoSection />
      <div className="homescreen">
        <h2 className="homescreen__title">Choose your program</h2>
        <Container className="programs_row">
          <Row>
            <Programs />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeScreen;
