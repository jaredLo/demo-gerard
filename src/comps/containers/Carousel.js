import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialBox from "./TestimonialBox";
import person1 from "../../assets/4-people/david-campion.jpg";

export default function CarouselMain() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  const responses = [
    {
      name: "David Champion",
      position: "CEO of iCloud",
      testimonial:
        '"System is excellent, It has made my system user experience to becone one of the easiest!"',
      img: person1,
    },
  ];

  return (
    <Carousel responsive={responsive} className="testimonial-bot">
      <TestimonialBox responses={responses} />
      <TestimonialBox responses={responses} />
      <TestimonialBox responses={responses} />
      <TestimonialBox responses={responses} />
      <TestimonialBox responses={responses} />
      <TestimonialBox responses={responses} />
      <TestimonialBox responses={responses} />
    </Carousel>
  );
}
