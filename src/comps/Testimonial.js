import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from "../assets/7-icons/arrow-right.svg";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-top">
        <h1>What other people say about our service</h1>
        <img className="arrow-right" src={arrow} alt="" />
      </div>
    </div>
  );
}

export default Testimonial;
