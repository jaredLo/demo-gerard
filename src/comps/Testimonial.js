import React from "react";
import "react-multi-carousel/lib/styles.css";
import arrow from "../assets/7-icons/arrow-right.svg";
import Car from "./Carousel";
import heart from "../assets/7-icons/heart.svg";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-top">
        <div className="top-left">
          <img src={heart} alt="" />
          <h1>What other people say about our service</h1>
        </div>

        <img className="arrow-right" src={arrow} alt="" />
      </div>
      <Car />
    </div>
  );
}

export default Testimonial;
