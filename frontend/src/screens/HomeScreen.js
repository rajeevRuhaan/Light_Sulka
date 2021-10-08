import "./HomeScreen.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
        <div className="homescreen__products">
          <Programs />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
