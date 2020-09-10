import React from "react";

function TestimonialBox(props) {
  const Test = () => {
    return props.responses.map((each, key) => {
      return (
        <div className="tbox" key={key}>
          <div className="tbox-top">
            <img src={each.img} alt="dp" />
            <div className="tbox-text">
              <h2>{each.name}</h2>
              <h3>{each.position}</h3>
            </div>
          </div>
          <p className="testimonial-p">{each.testimonial}</p>
        </div>
      );
    });
  };

  return <Test />;
}

export default TestimonialBox;
