import React from "react";
import banner from "../assets/2-banner/banner.png";
import Product from "../comps/Product";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-text-container">
          <h1>Make development easy with us.</h1>
          <h2>
            Doing development can never be easy, and it takes time and
            resources. We at EasyWork has the solution.
          </h2>
        </div>
        <img src={banner} alt="" />
      </div>
      <Product />
    </div>
  );
}

export default Home;
