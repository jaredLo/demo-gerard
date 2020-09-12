import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import person1 from "../../assets/4-people/david-campion.jpg";
import person2 from "../../assets/4-people/david-frank.jpg";
import person3 from "../../assets/4-people/lucas-bond.jpg";

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
    {
      name: "David Frank",
      position: "CEO of Marks.co",
      testimonial:
        '"I just wanted to share a quick note and let you know that you guys did a good job."',
      img: person2,
    },
    {
      name: "Lucas Bond",
      position: "BOD of Skyscanner",
      testimonial:
        '"Now it`s almost like having a designer right here, I just choose the page, make the changes and voila!"',
      img: person3,
    },
    {
      name: "David Champion",
      position: "CEO of iCloud",
      testimonial:
        '"System is excellent, It has made my system user experience to becone one of the easiest!"',
      img: person1,
    },
    {
      name: "David Frank",
      position: "CEO of Marks.co",
      testimonial:
        '"I just wanted to share a quick note and let you know that you guys did a good job."',
      img: person2,
    },
    {
      name: "Lucas Bond",
      position: "BOD of Skyscanner",
      testimonial:
        '"Now it`s almost like having a designer right here, I just choose the page, make the changes and voila!"',
      img: person3,
    },
  ];

  return (
    <Carousel responsive={responsive} className="testimonial-bot">
      {responses.map((each, key) => (
        <div className="tbox" key={key}>
          <div className="tbox-top">
            <img src={each.img} alt="dp" />
            <div className="tbox-text">
              <h3>{each.name}</h3>
              <h4>{each.position}</h4>
            </div>
          </div>
          <p className="testimonial-p">{each.testimonial}</p>
        </div>
      ))}
    </Carousel>
  );
}
