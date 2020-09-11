import React from "react";

function TestimonialBox(props) {
  const Test = () => {
    return props.responses.map((each, key) => {
      return (
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
      );
    });
  };

  return <Test />;
}

export default TestimonialBox;
