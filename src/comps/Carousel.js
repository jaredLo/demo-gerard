import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialBox from "./TestimonialBox";

export default function Car() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responses = [
    {
      name: "David Champion",
      position: "CEO of iCloud",
      testimonial:
        "System is excellent, It has made my system user experience to becone one of the easiest!",
    },
    {
      name: "David Frank van Hord",
      position: "CEO of Marks.co",
      testimonial:
        "I just wanted to share a quick note and let you know that you guys do a really good job.",
    },
    {
      name: "Lucas Bond",
      position: "BOD of Skyscanner",
      testimonial:
        "Now it's always like having a designer right here, I just choose the page, make the changes anytime I want.",
    },
  ];

  return (
    <Carousel responsive={responsive} className="testimonial-bot">
      <TestimonialBox responses={responses} />
    </Carousel>
  );
}
