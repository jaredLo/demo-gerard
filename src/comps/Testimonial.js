import React from "react";
import "react-multi-carousel/lib/styles.css";
import arrow from "../assets/7-icons/arrow-right.svg";
import Carousell from "./Carousel";
import Simple from "./Carousel";

function Testimonial() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="testimonial">
      <div className="testimonial-top">
        <h1>What other people say about our service</h1>
        <img className="arrow-right" src={arrow} alt="" />
      </div>
      <Simple />
    </div>
  );
}

export default Testimonial;
