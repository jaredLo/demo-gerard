import React from "react";

function TestimonialBox(props) {
  const Test = () => {
    return props.responses.map((each, key) => {
      return (
        <div className="tbox">
          <div>
            <img src="" alt="dp" />
            <div className="tbox-text">
              <h2>{each.name}</h2>
              <p>{each.position}</p>
            </div>
          </div>
          <h3 className="testimonial-p">{each.testimonial}</h3>
        </div>
      );
    });
  };

  return (
    <div className="test">
      <Test />
    </div>
  );
}

export default TestimonialBox;
