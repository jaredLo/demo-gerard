import React from "react";
import banner from "../assets/2-banner/banner.png";
import Product from "../comps/Product";
import Testimonial from "../comps/Testimonial";
import Employees from "../comps/Employees";
import Partners from "../comps/Partners";
import Contact from "../comps/Contact";
import Footer from "../comps/Footer";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-text-container">
          <h1>Make development easy with us.</h1>
          <p>
            Doing development can never be easy, and it takes time and
            resources. We at EasyWork has the solution.
          </p>
        </div>

        <img className="banner-image" src={banner} alt="" />
      </div>
      <Product />
      <Testimonial />
      <Employees />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
