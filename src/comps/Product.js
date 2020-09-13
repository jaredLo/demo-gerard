import React from "react";
import content1 from "../assets/3-content/content-001.png";
import content2 from "../assets/3-content/content-002.png";
import { Animate } from "react-simple-animate";

function Product() {
  return (
    <div className="product-container">
      <Animate
        play={true}
        duration={0.8}
        delay={0.2}
        start={{ transform: "translate(500px,0)", opacity: "0%" }}
        end={{ transform: "translate(0px, 0px)", opacity: "100%" }}
        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
      >
        <div className="product">
          <div className="product-text-container">
            <h2>We can give you our best user experience to your system</h2>
            <div className="p">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div>
            <img src={content1} alt="" />
          </div>
        </div>
      </Animate>
      <Animate
        play={true}
        duration={0.8}
        delay={1}
        start={{ transform: "translate(-500px,0)", opacity: "0%" }}
        end={{ transform: "translate(0px, 0px)", opacity: "100%" }}
        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
      >
        <div className="product2">
          <div className="product-text-container">
            <h2>Easy access. Whenever, wherever you want</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <img src={content2} alt="" />
          </div>
        </div>
      </Animate>
    </div>
  );
}

export default Product;
