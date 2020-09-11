import React from "react";
import "react-multi-carousel/lib/styles.css";
import arrow from "../assets/7-icons/arrow-right.svg";
import heart from "../assets/7-icons/heart.svg";
import CarouselMain from "./containers/Carousel";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-top">
        <div className="top-left">
          <img src={heart} alt="" />
          <h2>What other people say about our service</h2>
        </div>

        <img className="arrow-right" src={arrow} alt="" />
      </div>
      <CarouselMain />
    </div>
  );
}

export default Testimonial;
