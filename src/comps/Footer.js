import React from "react";
import logo from "../assets/1-header/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo-footer">
          <h1>Easy Work</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="address">
          <h4>Address</h4>
          <p>
            52-1, Jalan Awan Hijau, Taman Overseas Union, 58200, Kuala Lumpur,
            Wilayah Persekutuan Kuala Lumpur
          </p>
        </div>
        <div className="contacts">
          <h4>Contact</h4>
          <p>03-7451 5283</p>
          <h4>Fax</h4>
          <p>03-7451 5283</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
