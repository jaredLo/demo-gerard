import React from "react";
import content1 from "../assets/3-content/content-001.png";
import content2 from "../assets/3-content/content-002.png";

function Product() {
  return (
    <div className="product-container">
      <div className="product">
        <div className="product-text-container">
          <h2>We can give you our best user experience to your system</h2>
          <p>
            Alderaan? I'm not going to Alderaan. I've got to go home. It's late,
            I'm in for it as it is. The Force is strong with this one. I have
            you now. As you wish. I call it luck. I want to come with you to
            Alderaan. There's nothing for me here now. I want to learn the ways
            of the Force and be a Jedi, like my father before me.
          </p>
        </div>
        <div>
          <img src={content1} alt="" />
        </div>
      </div>
      <div className="product2">
        <div className="product-text-container">
          <h2>We can give you our best user experience to your system</h2>
          <p>
            Kid, I've flown from one side of this galaxy to the other. I've seen
            a lot of strange stuff, but I've never seen anything to make me
            believe there's one all-powerful Force controlling everything.
            There's no mystical energy field that controls my destiny. It's all
            a lot of simple tricks and nonsense. He is here.
          </p>
        </div>
        <div>
          <img src={content2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Product;
